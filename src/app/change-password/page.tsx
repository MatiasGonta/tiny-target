"use client"

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassword } from "@/lib";
import { passwordSchema } from "@/validations";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const metadata = {
    title: "Cambio de contraseña | Tiny Target",
}

export default function ChangePasswordPage({ searchParams }: { searchParams: { [key: string]: string } }) {
    const router = useRouter();

    const changePasswordSchema = z.object({
        newPassword: passwordSchema,
        confirmNewPassword: passwordSchema,
    }).refine((data) => data.newPassword === data.confirmNewPassword, {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
    });

    const form = useForm<z.infer<typeof changePasswordSchema>>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            newPassword: "",
            confirmNewPassword: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof changePasswordSchema>) => {
        if (!values || !values.newPassword || !values.confirmNewPassword) return;

        try {
            toast.loading("Cargando...");
            const res = await changePassword({ newPassword: values.newPassword, confirmNewPassword: values.confirmNewPassword, token: searchParams.token });
            if (!res || res.status !== 201) {
                if (res.redirect) return router.push('/auth');

                throw new Error(res?.message);
            }
            toast.dismiss();
            toast.success(res?.message);
            return router.push('/auth');
        } catch (error: any) {
            console.error('Error al cambiar la contraseña', error);
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
                            <CardTitle>Cambiar contraseña</CardTitle>
                            <CardDescription>Proporciona una nueva contraseña para tu cuenta. Asegúrate de recordarla bien.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="newPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Contraseña nueva</FormLabel>
                                                <FormControl>
                                                    <Input type="password" required placeholder="Introduce su contraseña nueva" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="confirmNewPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirmar contraseña nueva</FormLabel>
                                                <FormControl>
                                                    <Input type="password" required placeholder="Repita su contraseña nueva" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full">Cambiar contraseña</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </article>
            </section>
        </main>
    )
}