import { connectDB } from "@/utils";
import { NextResponse, NextRequest } from "next/server";
import { UrlModel } from "@/models";

export async function GET() {
    connectDB();


    
    await UrlModel.deleteMany({});
    // clearCloudinaryStore();
    await UrlModel.insertMany({
        original: 'https://nextjs.org',
        short: Math.random().toString(36).substring(2,7),
    });
    
    return NextResponse.json({
        message: 'Se ha realizado un seed completo de la base de datos',
    })
}