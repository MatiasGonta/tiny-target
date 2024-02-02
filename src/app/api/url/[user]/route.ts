import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import { UrlModel } from "@/models";

export async function GET(req: NextRequest, { params }: { params: { user: string } }) {
    const { user } = params;
    if (!user) return NextResponse.json({ message: 'No se ha recibido un usuario' });

    const pageQuery = new URL(req.url).searchParams.get('page') || 1;
    const limitQuery = new URL(req.url).searchParams.get('limit') || 20;
    const searchQuery = new URL(req.url).searchParams.get('search');

    const options = {
        page: parseInt(pageQuery as string),
        limit: parseInt(limitQuery as string),
    }

    let filters: Record<string, any> = { createdBy: user };
    
    if (searchQuery) {
        const regex = new RegExp(searchQuery as string, 'i');

        filters = {
            ...filters,
            $or: [
                { original: regex },
                { short: regex },
            ],
        }
    }

    try {
        await connectDB();

        // const urls = await UrlModel.find({ createdBy: user });
        const urls = await UrlModel.paginate( filters, options );
        if (!urls.docs || urls.docs.length === 0) return NextResponse.json({ message: 'No se encontraron urls creadas por ' + user });

        return NextResponse.json({
            message: 'Se obtuvo las urls con exito!',
            data: urls,
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de obtener las urls' });
    }
}