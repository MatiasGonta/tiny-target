import { UserModel } from '@/models';
import { connectDB } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { headers } from 'next/headers';
import { hash } from 'bcryptjs';

export async function PUT(req: NextRequest) {
    const { newPassword, confirmNewPassword } = await req.json();
    if (!newPassword || !confirmNewPassword) return NextResponse.json({ message: 'No se ha recibido una nueva contraseña.', status: 400 });
    if (newPassword !== confirmNewPassword) return NextResponse.json({ message: 'Las contraseñas no coinciden.', status: 400 });

    try {
        await connectDB();

        const headerList = headers();
        const token = headerList.get('Authorization');
        if (!token) return NextResponse.json({ message: 'No esta autorizado para realizar esta operación.', status: 400, redirect: true });

        const isTokenValid = jwt.verify(token, process.env.JWT_SECRET!);

        const data = isTokenValid as JwtPayload;

        const userFind = await UserModel.findById(data.id);
        // Exist user validation
        if (!userFind) return NextResponse.json({ message: 'No se ha encontrado el usuario.', status: 404, redirect: true });

        // Encrypt new password
        const hashedPassword = await hash(newPassword, 12);

        userFind.password = hashedPassword;

        await userFind.save();

        return NextResponse.json({ message: 'La contraseña se cambio correctamente.', status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Hubo un error al momento de cambiar la contraseña.', status: 500 });
    }
};