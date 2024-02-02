import { z } from "zod";

export const urlSchema = z.object({
    url: z.string().url({ message: "La url que proporcionaste no es válida" }),
    alias: z.string().refine((data) => data === null || data === undefined || data === "" || (data.length >= 5 && data.length <= 30), {
        message: "El alias debe tener entre 5 y 30 caracteres",
    }),
})