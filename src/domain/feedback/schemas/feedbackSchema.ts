import z from 'zod';

export const FeedbackSchema = z.object({
  name: z.string('Por favor, informe seu nome.').nonempty('Por favor, informe seu nome.'),
  sessionType: z.string('Por favor, informe o tipo de sessão.').nonempty('Por favor, informe o tipo de sessão.'),
  feedback: z.string('Por favor, informe seu depoimento.').nonempty('Por favor, informe seu depoimento.'),
  authorization: z.boolean('É necessário autorizar a publicação do feedback.').refine((val) => val === true, { message: 'É necessário autorizar a publicação do feedback.' }),
})

export type FeedbackSchemaType = z.infer<typeof FeedbackSchema>;