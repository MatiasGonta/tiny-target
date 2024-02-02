"use client"

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { revalidateUrlsAction } from "@/actions";
import { urlSchema } from "@/validations";
import { useSession } from "next-auth/react";
import { createUrl } from "@/lib";

export default function UrlForm() {
    const { data: session } = useSession();

    const [responseMessage, setResponseMessage] = useState<string | null>(null);

    const form = useForm<z.infer<typeof urlSchema>>({
        resolver: zodResolver(urlSchema),
        defaultValues: {
            url: "",
            alias: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof urlSchema>) => {
        const user_email = session?.user?.email!;
        const alias = values.alias;
        const url = values.url;

        if (!url || !user_email) return;

        let formData: { user_email: string, url: string; alias?: string } = {
            user_email,
            url,
        };

        if (alias && alias.trim() !== "" && alias.trim().length > 5) {
            formData = {
                ...formData,
                alias
            }
        }

        try {
            const { data, message } = await createUrl(formData);
            revalidateUrlsAction();
            
            setResponseMessage(message);
        } catch (err) {
            console.error('Error al enviar la URL', err)
        }
    }

    return (
        <>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="url"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Url</FormLabel>
                                    <FormControl>
                                        <Input type="text" required placeholder="Introduce una url para acortar" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Este sera el sitio donde la url recortada lo dirigirá
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="alias"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Alias</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Introduce un alias" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Acortar</Button>
                    </form>
                </Form>
            </div>
            {
                responseMessage &&
                <div className="flex flex-col gap-0.5 mt-1 border-top border-[#ccc]">
                    <p>{responseMessage}</p>
                </div>
            }
        </>
    )
}