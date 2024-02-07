import { z } from "zod";

export const passwordSchema = z.string().min(8, { message: "La contraseña no debe ser menor a 8 caracteres" }).max(40, { message: "La contraseña no debe ser mayor a 40 caracteres" });

export const signupSchema = z.object({
    fullName: z.string().min(5, { message: "El nombre no debe ser menor a 5 caracteres" }).max(40, { message: "El nombre no debe ser mayor a 40 caracteres" }),
    email: z.string().email({ message: "El email que proporcionaste no es válido" }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
})