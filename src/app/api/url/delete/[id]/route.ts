import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import { UrlModel } from "@/models";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    if (!id) return NextResponse.json({ message: 'No se ha recibido el id de la url a eliminar' });

    try {
        await connectDB();

        const deletedUrl = await UrlModel.findByIdAndDelete(id);
        if (!deletedUrl) return NextResponse.json({ message: 'No se encontro la url eliminada' });

        return NextResponse.json({
            message: 'Se elimino la url con la id ' + id + ' con exito!',
            data: deletedUrl,
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de eliminar la url con la id ' + id });
    }
}