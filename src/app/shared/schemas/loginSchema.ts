import { z } from "zod"

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório.")
    .email("Informe um e-mail válido."),
    
  password: z
    .string()
    .nonempty("A senha é obrigatória.")
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres." }),
})

export type formLoginType = z.infer<typeof LoginSchema>
