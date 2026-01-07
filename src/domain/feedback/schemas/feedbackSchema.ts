import z from 'zod';

export const FeedbackSchema = z.object({
  name: z.string('Por favor, informe seu nome.').nonempty('Por favor, informe seu nome.'),
  sessionType: z.string('Por favor, informe o tipo de sessão.').nonempty('Por favor, informe o tipo de sessão.'),
  testimonial: z.string('Por favor, informe seu depoimento.').nonempty('Por favor, informe seu depoimento.'),
  authorizedToPostFeedback: z.boolean('É necessário autorizar a publicação do feedback.').refine((val) => val === true, { message: 'É necessário autorizar a publicação do feedback.' }),
})

export type FeedbackSchemaType = z.infer<typeof FeedbackSchema>;

const feedback = {
  name: "Maria Silva",
  sessionType: "Ensaio Gestante",
  testimonial: "A experiência foi maravilhosa! A fotógrafa foi muito atenciosa e as fotos ficaram incríveis. Super recomendo!",
  authorizedToPostFeedback: true
};



export const feedbackFormContent = [
  {
    id: 'name',
    label: 'Seu nome',
    placeholder: 'Digite o seu nome',
    type: 'text',
  },
  {
    id: 'sessionType',
    label: 'Tipo de sessão',
    placeholder: 'Informe o tipo de sessão',
    type: 'text',
  },
  {
    id: 'testimonial',
    label: 'Depoimento',
    placeholder: 'Escreva seu depoimento',
    type: 'textarea',
  },
  {
    id: 'authorizedToPostFeedback',
    label: 'Autorizo a publicação deste feedback no site Kálita Fotografias. Entendo que meu nome e depoimento poderão ser exibidos publicamen',
    type: 'checkbox',
  },
]