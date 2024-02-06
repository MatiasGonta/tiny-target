"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { signupSchema } from "@/validations";
import { signup } from "@/lib";
import { updatedUnauthUrlsWithLocalStorage } from "@/utils";
import { toast } from "sonner";

export default function RegisterForm() {
    const { push } = useRouter();

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof signupSchema>) => {
        if (!values || !values.fullName || !values.email || !values.password || !values.confirmPassword) return;

        if (values.password !== values.confirmPassword) return;

        try {
            toast.loading("Cargando...");
            const { data, status, message } = await signup(values);
            if (status !== 201) {
                toast.dismiss();
                toast.error(message);
                throw new Error(message);
            }

            const res = await signIn('credentials', {
                email: data.email,
                password: values.password,
                redirect: false
            });

            if (res && res?.ok) {
                updatedUnauthUrlsWithLocalStorage(data.email);
                toast.dismiss();
                return push('/');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre Completo</FormLabel>
                                <FormControl>
                                    <Input type="text" required placeholder="Introduce su nombre completo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input type="password" required placeholder="Introduce su contraseña" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input type="password" required placeholder="Introduce su contraseña nuevamente" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Registrarse</Button>
                </form>
            </Form>
        </div>
    )
}