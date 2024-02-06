import { NextResponse, NextRequest } from "next/server";
import { UrlModel } from "@/models";
import { connectDB } from "@/utils";

export async function POST(req: NextRequest) {    
    const { url, alias, user_email } = await req.json();
    const user = user_email || 'Anonymous';
    let shortUrl: string;

    try {
        await connectDB();

        // Validations
        if (alias && alias.trim() !== "" && (alias.trim().length >= 5 && alias.trim().length <= 30)) {
            shortUrl = alias.trim();
        } else {
            shortUrl = Math.random().toString(36).substring(2,9);
        }

        if (!url) return NextResponse.json({ message: 'Hubo un error al momento de obtener los datos.', status: 400 });

        const existAlias = await UrlModel.findOne({ short: shortUrl });
        if (existAlias) {
            if (alias && alias.trim() !== "" && (alias.trim().length >= 5 && alias.trim().length <= 30)) return NextResponse.json({
                message: 'El alias proporcionado no está disponible. Por favor, elige otro.',
                data: existAlias,
                status: 409
            });

            shortUrl = Math.random().toString(36).substring(2,9);
        }

        // Create new url
        const newShortUrl = await UrlModel.create({
            original: url,
            short: shortUrl,
            createdBy: user,
        });

        return NextResponse.json({
            message: 'Url creada exitosamente.',
            data: newShortUrl,
            status: 201
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de crear la url', status: 500 });
    }
}