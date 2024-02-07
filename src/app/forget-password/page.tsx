"use client"

import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendForgetPasswordEmail } from "@/lib";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Link from "next/link";

export const metadata = {
    title: "Recuperación de contraseña | Tiny Target",
}

export default function ForgetPasswordPage({ searchParams }: { searchParams: { [key: string]: string } }) {
    const { email } = searchParams;
    const defaultEmailValue = email || "";

    const forgetPasswordSchema = z.object({
        email: z.string().email({ message: "El email que proporcionaste no es válido" })
    });

    const form = useForm<z.infer<typeof forgetPasswordSchema>>({
        resolver: zodResolver(forgetPasswordSchema),
        defaultValues: {
            email: defaultEmailValue,
        },
    })

    const onSubmit = async (values: z.infer<typeof forgetPasswordSchema>) => {
        if (!values || !values.email) return;

        try {
            toast.loading("Cargando...");
            const res = await sendForgetPasswordEmail(values.email);
            if (!res || res.status !== 201) {
                throw new Error(res?.message);
            }
            toast.dismiss();
            toast.success(res?.message);
        } catch (error: any) {
            console.error('Error al enviar el correo de recuperación', error);
            toast.dismiss();
            toast.error(error?.message);
        }
    }

    return (
        <main className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center p-6 pb-12">
            <section className="w-full max-w-[1024px] flex flex-col items-center">
                <article>
                    <Card className="w-[375px]">
                        <CardHeader className="relative">
                            <CardTitle>Recupera tu cuenta</CardTitle>
                            <CardDescription>Ingresa tu correo electrónico para buscar tu cuenta.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Correo electrónico</FormLabel>
                                                <FormControl>
                                                    <Input type="email" required placeholder="Introduce su correo electrónico" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full">Recuperar contraseña</Button>
                                </form>
                            </Form>
                            <CardFooter className="p-0 pt-3">
                                <p className="text-sm text-muted-foreground mx-auto">Volver a <Link href={email ? `/auth?email=${email}` : "/auth"} className="text-tiny-target-secondary underline">iniciar sesión</Link></p>
                            </CardFooter>
                        </CardContent>
                    </Card>
                </article>
            </section>
        </main>
    )
}