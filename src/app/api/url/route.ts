import { connectDB } from "@/utils";
import { NextResponse, NextRequest } from "next/server";
import { UrlModel } from "@/models";

export async function GET() {
    try {
        await connectDB();

        const urls = await UrlModel.find();

        return NextResponse.json({
            message: 'Se obtuvo las urls con exito!',
            data: urls
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de obtener las urls' });
    }
}

export async function POST(req: NextRequest) {
    const { url, alias, user_email } = await req.json();
    let shortUrl: string;

    try {
        // Validations
        if (!alias) {
            shortUrl = Math.random().toString(36).substring(2,9);
        } else {
            shortUrl = alias;
        }

        if (!url || !user_email) throw new Error('No se ha recibido la url y/o el email del usuario');
        
        const existInDb = await UrlModel.findOne({ original: url });

        if (existInDb && existInDb.createdBy === user_email) return NextResponse.json({
            message: 'Ya creaste una url corta para esa url!',
            data: existInDb,
        });

        if (existInDb && (!alias || alias === "" || alias === existInDb.short)) return NextResponse.json({
            message: 'Ya existe una url corta para esa url!',
            data: existInDb,
        });

        // Create new url
        const newShortUrl = await UrlModel.create({
            original: url,
            short: shortUrl,
            createdBy: user_email,
        });

        return NextResponse.json({
            message: 'Url creada con exito!',
            data: newShortUrl,
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Hubo un error al momento de crear la url' });
    }
}