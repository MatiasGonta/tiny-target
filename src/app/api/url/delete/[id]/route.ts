import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import { UrlModel } from "@/models";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) return NextResponse.json({ message: 'No se ha recibido el id de la url a eliminar.', status: 400 });

    try {
        await connectDB();

        const deletedUrl = await UrlModel.findByIdAndDelete(id);

        return NextResponse.json({
            message: 'Se elimino la url con exito!',
            data: deletedUrl,
            status: 201
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de eliminar la url.', status: 500 });
    }
}