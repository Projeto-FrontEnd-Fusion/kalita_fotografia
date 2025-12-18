'use client'

import Input from "@/app/shared/ui/form/input";
import { useFeedbackForm } from "../hooks/useFeedbackForm";
import { FeedbackSchema, FeedbackSchemaType } from "../schemas/feedbackSchema";
import { Textarea } from "./Textarea";
import { AuthorizationInput } from "./AuthorizationInput";

export function FeedbackForm() {
  const {
    handleSubmit,
    errors,
    control,
    reset: resetForm,
    clearErrors
  } = useFeedbackForm(FeedbackSchema);

  const onSubmit = (formData: FeedbackSchemaType) => {
    console.log(formData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 bg-kalita-bg-medium py-8 px-12 border border-kalita-bg-light-brown rounded-lg max-w-[520px]"
    >
      <Input
        name="name"
        control={control}
        errors={errors}
        nameInput="Seu nome"
        nameLabelInput="name"
        namePlaceholderInput="Digite seu nome"
        typeInput="text"
      />

      <Input
        name="sessionType"
        control={control}
        errors={errors}
        nameInput="Qual foi o tipo de sessão?"
        nameLabelInput="sessionType"
        namePlaceholderInput="Parto, acompanhamento do bebê, gestante..."
        typeInput="text"
      />


      <Textarea
        name="feedback"
        nameInput="Seu depoimento:"
        namePlaceholderInput="Descreva aqui a sua experiência..."
        control={control}
        errors={errors}
      />

      <AuthorizationInput
        name="authorization"
        namePlaceholderInput="Autorizo a publicação deste feedback no site Kálita Fotografias. Entendo que meu nome e depoimento poderão ser exibidos publicamente."
        control={control}
        errors={errors}
      />


      <button
        type="submit"
        className="bg-kalita-brown-medium text-kalita-bg-light h-[52px] hover:bg-kalita-brown-dark cursor-pointer rounded-md"
      >
        Enviar
      </button>
    </form>
  )
}