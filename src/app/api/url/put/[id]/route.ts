import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import { UrlModel } from "@/models";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) return NextResponse.json({ message: 'No se ha recibido el id de la url a actualizar.' });

    const { newOriginal, newShort } = await req.json();

    let newUrl: Record<string, any> = {}

    // Validations
    if (newOriginal && newOriginal.trim() !== "") newUrl.original = newOriginal;
    if (newShort && newShort.trim() !== "" && (newShort.trim().length >= 5 && newShort.trim().length <= 30)) newUrl.short = newShort;
    if (!newUrl.original && !newUrl.short) return NextResponse.json({ message: 'No se encontraron nuevos datos para actualizar la url.', status: 400 });

    const existAlias = await UrlModel.findOne({ short: newUrl.short });
    if (existAlias) return NextResponse.json({
        message: 'El alias proporcionado no está disponible. Por favor, elige otro.',
        data: existAlias,
        status: 409
    });

    try {
        await connectDB();

        const updatedUrl = await UrlModel.findByIdAndUpdate(id, newUrl);
        if (!updatedUrl) return NextResponse.json({ message: 'La url que intentas actualizar no se encontró.', status: 404 });

        return NextResponse.json({
            message: 'Se actualizo la url con exito!',
            data: updatedUrl,
            status: 201
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de actualizar la url.', status: 500 });
    }
}