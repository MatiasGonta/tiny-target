import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import { UrlModel } from "@/models";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) return NextResponse.json({ message: 'No se ha recibido el id de la url a actualizar' });

    const { newOriginal, newShort } = await req.json();

    let newUrl: Record<string, any> = {}

    // Validations
    if (newOriginal && newOriginal.trim() !== "") newUrl.original = newOriginal;
    if (newShort && newShort.trim() !== "" && (newShort.trim().length >= 5 && newShort.trim().length <= 30)) newUrl.short = newShort;

    if (!newUrl.original && !newUrl.short) return NextResponse.json({ message: 'No se encontraron nuevos datos para actualizar la url con la id ' + id });

    try {
        await connectDB();

        const updatedUrl = await UrlModel.findByIdAndUpdate(id, newUrl);
        if (!updatedUrl) return NextResponse.json({ message: 'No se encontro la url actualizada' });

        return NextResponse.json({
            message: 'Se actualizo la url con la id ' + id + ' con exito!',
            data: updatedUrl,
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de actualizar la url con la id ' + id });
    }
}