import { connectDB } from "@/utils";
import { NextResponse, NextRequest } from "next/server";
import { UrlModel } from "@/models";

export async function GET() {
    await connectDB();
    
    await UrlModel.deleteMany({});
    await UrlModel.insertMany([
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://nextjs.org',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://twitter.com/home',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://www.twitch.tv/luquitarodriguez',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://zod.dev/?id=requirements',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://masteringjs.io/tutorials/mongoose/unique',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://chat.openai.com/c/24371a40-4f7f-4903-ba07-700aa6fd12e5',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://ui.shadcn.com/docs/components/form',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        },
        {
            original: 'https://slug.vercel.app/dash',
            short: Math.random().toString(36).substring(2,7),
            createdBy: 'matiasgonta2023@gmail.com',
        }
    ]);
    
    return NextResponse.json({
        message: 'Se ha realizado un seed completo de la base de datos',
    })
}