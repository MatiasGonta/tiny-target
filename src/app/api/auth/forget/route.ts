import { UserModel } from '@/models';
import { connectDB } from '@/utils';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import jwt from 'jsonwebtoken';
import { TINY_TARGET_URL } from '@/constants';
import { EmailTemplate } from '@/components';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  // Valid email validation
  const validEmailRegex = /\S+@\S+\.\S+/;
  if (!email || typeof email !== 'string' || !validEmailRegex.test(email)) return NextResponse.json({ message: 'No se ha recibido un email válido.', status: 400 });

  try {
    await connectDB();
    const userFind = await UserModel.findOne({ email });

    // Exist user validation
    if (!userFind) return NextResponse.json({ message: 'El correo no se encuentra registrado.', status: 404 });

    const tokenData = {
      id: userFind._id,
      email: userFind.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET!, { expiresIn: 7200 });

    const forgetUrl = `${TINY_TARGET_URL}change-password?token=${token}`;

    // Send forget email
    const { data, error } = await resend.emails.send({
      from: 'Tiny Target <onboarding@resend.dev>',
      to: email,
      subject: 'Tiny Target - Recuperación de contraseña',
      react: EmailTemplate({ forgetURL: forgetUrl }),
    });

    if (error) {
      return NextResponse.json({ message: 'Hubo un error al momento de enviar el email de recuperación.', status: 400 });
    }

    return NextResponse.json({
      message: 'Se envio un email de recuperación al correo proporcionado.',
      status: 201,
      data
    });
  } catch (error) {
    return NextResponse.json({ message: 'Hubo un error al momento de enviar el email de recuperación.', status: 500 });
  }
};