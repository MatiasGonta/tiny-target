import { Redirect } from "@/components";
import { UrlModel } from "@/models";
import { connectDB } from "@/utils";
import { redirect } from "next/navigation";

export async function shortUrl({ params }: { params: { shortUrl: string } }) {
    try {
        connectDB();

        const data = await UrlModel.findOne({ short: params.shortUrl });

        if(!data) return redirect('/');

        return <Redirect path={data.original} />;
    } catch (error) {
        console.log(error);
        redirect('/');
    }
}

export default shortUrl;