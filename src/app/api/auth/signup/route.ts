import { NextResponse, NextRequest } from "next/server";
import { UserModel } from "@/models";
import { hash } from 'bcryptjs';
import { connectDB } from "@/utils";

export async function POST(req: NextRequest) {
    const { fullName, email, password } = await req.json();

    // Validations
    if (!fullName || !email || !password) return NextResponse.json({ message: 'Por favor rellena todos los campos correctamente' });

    if (fullName.length < 5) return NextResponse.json({ message: 'El nombre debe tener al menos 5 caracteres', status: 400 });
    if (fullName.length > 40) return NextResponse.json({ message: 'El nombre debe tener menos de 40 caracteres', status: 400 });

    if (password.length < 8) return NextResponse.json({ message: 'La contraseña debe tener al menos 8 caracteres', status: 400 });
    if (password.length > 40) return NextResponse.json({ message: 'La contraseña debe tener menos de 40 caracteres', status: 400 });

    try {
        await connectDB();

        const isUserFound = await UserModel.findOne({ email });
        if (isUserFound) return NextResponse.json({ message: 'Ya existe un usuario registrado con ese correo electrónico', status: 400 });

        // Encrypt password
        const hashedPassword = await hash(password, 12);

        // Create new user
        const newUser = await UserModel.create({
            fullName,
            email,
            password: hashedPassword
        });

        return NextResponse.json({
            message: 'Usuario creado con exito',
            status: 201,
            data: newUser,
        })
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            message: 'Hubo un error al momento de crear el usuario',
            status: 404,
        })
    }
}