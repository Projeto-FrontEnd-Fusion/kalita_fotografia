import z from "zod";

export const ContactSchema = z.object({
  full_name: z
    .string()
    .nonempty("Por favor, informe seu nome completo.")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, {
      message: "Informe um nome válido (apenas letras e espaços).",
    }),

  email: z
    .string()
    .nonempty("O campo de e-mail é obrigatório.")
    .email({ message: "Digite um e-mail válido" }),

  phone: z
    .string()
    .nonempty("O número de telefone é obrigatório.")
    .regex(/^\(?\d{2}\)?\s?\d{4,5}[-\s]?\d{4}$/, "Formato Invalido !")
    .transform((val) => `+55 ${val.replace(/\s+/g, " ").trim()}`),

  photo_session_type: z
    .string()
    .nonempty("Selecione o tipo de ensaio que você deseja."),

  message: z
    .string()
    .nonempty("Conte um pouco sobre o que você está buscando.")
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." })
    .max(500, { message: "A mensagem pode ter no máximo 500 caracteres." }),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
