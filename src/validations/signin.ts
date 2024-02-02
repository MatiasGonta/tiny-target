import { z } from "zod";

export const signinSchema = z.object({
    email: z.string().email({ message: "El email que proporcionaste no es válido" }),
    password: z.string().min(8, { message: "La contraseña no debe ser menor a 8 caracteres" }).max(40, { message: "La contraseña no debe ser mayor a 40 caracteres" }),
})