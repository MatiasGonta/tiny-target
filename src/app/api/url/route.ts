import { connectDB } from "@/utils";
import { NextResponse, NextRequest } from "next/server";
import { UrlModel } from "@/models";

export async function GET() {
    try {
        connectDB();

        const urls = await UrlModel.find();

        return NextResponse.json({
            message: 'Se obtuvo las urls con exito!',
            data: urls
        });
    } catch (error) {
        return NextResponse.json({ message: 'Hubo un error al momento de obtener las urls' });
    }
}

export async function POST(req: NextRequest) {
    const { url } = await req.json();
    let shortUrl = Math.random().toString(36).substring(2, 7);

    try {
        const existInDb = await UrlModel.findOne({ original: url });

        if (existInDb) return NextResponse.json({
            message: 'Ya existe la url!',
            data: existInDb,
        });

        const newShortUrl = await UrlModel.create({
            original: url,
            short: shortUrl
        });

        return NextResponse.json({
            message: 'Url creada con exito!',
            data: newShortUrl,
        });
    } catch (error) {
        return NextResponse.json({ message: 'Hubo un error al momento de crear la url' });
    }
}