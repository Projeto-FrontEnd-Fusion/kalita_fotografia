'use client'

import Input from "@/app/shared/ui/form/input";
import { useFeedbackForm } from "../hooks/useFeedbackForm";
import { FeedbackSchema, FeedbackSchemaType } from "../schemas/feedbackSchema";
import { Textarea } from "./Textarea";
import { AuthorizationInput } from "./AuthorizationInput";
import { ConfirmModal } from "./ConfirmModal";
import { useState } from "react";

export function FeedbackForm() {
  const {
    handleSubmit,
    errors,
    control,
    reset: resetForm,
    clearErrors
  } = useFeedbackForm(FeedbackSchema);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingData, setPendingData] = useState<FeedbackSchemaType | null>(null);


  const onSubmit = (formData: FeedbackSchemaType) => {
    setPendingData(formData);
    setIsModalOpen(true);
  }

  const handleConfirmSubmit = async () => {
    if (!pendingData) return;

    console.log("ENVIANDO PARA API:", pendingData);

    // await fetch("/api/feedback", { ... })

    setIsModalOpen(false);
    setPendingData(null);
    resetForm();
  };


  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 bg-kalita-bg-medium py-8 px-12 border border-kalita-bg-light-brown rounded-lg max-w-[520px] drop-shadow-xl/25"
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

      <ConfirmModal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleConfirmSubmit}
        buttonText="Confirmar"
      />
    </>
  )
}