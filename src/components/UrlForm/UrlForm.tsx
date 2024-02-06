"use client"

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner"
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
import { UrlCard } from "..";
import { UrlItem } from "@/models";
import { TINY_TARGET_URL } from "@/constants";

export default function UrlForm() {
    const { data: session } = useSession();

    let unauthedUrlIds = [];
    if (typeof window !== 'undefined' && window.localStorage) {
        const rawUnauthedUrlIds = localStorage.getItem("unauthedUrls");
        unauthedUrlIds = JSON.parse(rawUnauthedUrlIds!) || [];
    }

    const [newUrl, setNewUrl] = useState<UrlItem | null>(null);

    const form = useForm<z.infer<typeof urlSchema>>({
        resolver: zodResolver(urlSchema),
        defaultValues: {
            url: "",
            alias: ""
        },
    })

    const handleCreateUrl = async (formData: { user_email: string, url: string; alias?: string }) => {
        const res = await createUrl(formData);
        if (res.status !== 201) throw new Error(res.message);
        revalidateUrlsAction();
        setNewUrl(res.data);

        if (!formData.user_email) {
            const newUnauthedUrlIds = [res.data._id, ...unauthedUrlIds];
            localStorage.setItem("unauthedUrls", JSON.stringify(newUnauthedUrlIds));
        }

        return res;
    }

    const onSubmit = async (values: z.infer<typeof urlSchema>) => {
        const user_email = session?.user?.email!;
        const alias = values.alias;
        const url = values.url;

        if (!url) return toast.warning("Por favor, ingresa una URL válida.");
        if (unauthedUrlIds.length === 10) return toast.error("No puedes crear más URLs sin iniciar sesión");

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
            toast.promise(handleCreateUrl(formData), {
                loading: 'Cargando...',
                success: (res) => {
                    return res.message;
                },
                error: (res) => {
                    console.error(`Error ${res.status} al crear la URL`, res.message);
                    return res.message;
                },
            });
        } catch (err) {
            console.error('Error al crear la URL', err)
        }
    }

    return (
        <>
            <div className="w-full">
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
                                    <FormLabel>Alias <small className="text-[#505050] dark:text-[#ddd]">(opcional)</small></FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Introduce un alias" maxLength={30} {...field} />
                                    </FormControl>
                                    {
                                        form.getValues().alias && form.getValues().alias.trim() !== "" &&
                                        <FormDescription>
                                            {TINY_TARGET_URL + form.getValues().alias}
                                        </FormDescription>
                                    }
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Acortar</Button>
                    </form>
                </Form>
            </div>
            {
                newUrl &&
                <div className="mt-8 flex flex-col gap-2.5 justify-center items-center">
                    <h2 className="text-foreground font-bold text-[20px] self-start">Tu nueva URL corta: </h2>
                    <UrlCard url={newUrl} options={false} />
                </div>
            }
        </>
    )
}