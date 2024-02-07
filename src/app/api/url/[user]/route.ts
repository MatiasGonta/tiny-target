import { connectDB } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import { UrlModel } from "@/models";

export async function GET(req: NextRequest, { params }: { params: { user: string } }) {
    const { user } = params;
    if (!user) return NextResponse.json({ message: 'No se ha recibido un usuario', status: 400 });

    const pageQuery = new URL(req.url).searchParams.get('page') || 1;
    const searchQuery = new URL(req.url).searchParams.get('search');

    const options = {
        page: parseInt(pageQuery as string),
        limit: 21,
        sort: { createdAt: -1 },
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

        const urls = await UrlModel.paginate( filters, options );
        if (!urls.docs || urls.docs.length === 0) return NextResponse.json({ message: 'No se encontraron urls creadas por ' + user, status: 404 });

        return NextResponse.json({
            message: 'Se obtuvo las urls con exito!',
            data: urls,
            status: 201
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de obtener las urls.', status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { user: string } }) {
    const { user } = params;
    const { unauthedUrlIds } = await req.json();

    if (!user) return NextResponse.json({ message: 'No se ha recibido un usuario.', status: 400 });
    if (!unauthedUrlIds) return NextResponse.json({ message: 'No se ha recibido un aunthenticated urls para actualizar.', status: 400 });

    try {
        let updatedUrls: Record<string, any>[] = [];

        for (const urlId of unauthedUrlIds) {
            const updateUrl = await UrlModel.findByIdAndUpdate(urlId, { createdBy: user });
            updatedUrls = [ ...updatedUrls, updateUrl ];
        }

        return NextResponse.json({
            message: 'Las aunthenticated urls se actualizaron con exito!',
            data: updatedUrls,
            status: 201
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de actualizar las aunthenticated urls.', status: 500 });
    }
}