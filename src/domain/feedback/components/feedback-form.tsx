"use client";

import Input from "@/app/shared/ui/form/input";
import { useFeedbackForm } from "../hooks/useFeedbackForm";
import {
  feedbackFormContent,
  FeedbackSchema,
  FeedbackSchemaType,
} from "../schemas/feedbackSchema";
import { Textarea } from "./Textarea";
import { AuthorizationInput } from "./AuthorizationInput";
import { ConfirmModal } from "./ConfirmModal";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { useSendFeedBack } from "../hooks/useSendFeedBack";

export function FeedbackForm() {
  const {
    handleSubmit,
    errors,
    control,
    reset: resetForm,
    clearErrors,
  } = useFeedbackForm(FeedbackSchema);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingData, setPendingData] = useState<FeedbackSchemaType | null>(
    null
  );
  const { mutate, isPending, isError } = useSendFeedBack();

  useEffect(() => {
    const feedback = {
      name: "Maria Silva",
      sessionType: "Ensaio Gestante",
      testimonial:
        "A experiência foi maravilhosa! A fotógrafa foi muito atenciosa e as fotos ficaram incríveis. Super recomendo!",
      authorizedToPostFeedback: true,
    };

    resetForm(feedback);
  }, []);

  const onSubmit = (formData: FeedbackSchemaType) => {
    setPendingData(formData);
    setIsModalOpen(true);
  };

  const handleConfirmSubmit = async () => {
    if (!pendingData) return;

    console.log("ENVIANDO PARA API:", pendingData);

    // await fetch("/api/feedback", { ... })
    mutate(pendingData);

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
        {isPending && <Loader className="animate-spin" />} caregando...
        {isError && "Falha ao enviar os dados"}
       
        {feedbackFormContent.map(({ id, label, placeholder, type }) =>
          type === "textarea" ? (


            <fieldset key={id}>
              <Textarea
                name={id}
                nameInput={label}
                namePlaceholderInput={placeholder as string}
                control={control}
                errors={errors}
              />
            </fieldset>
            

          ) : type === "text" ? (


            <fieldset key={id}>
              <Input
                name={id}
                control={control}
                errors={errors}
                nameInput={label}
                nameLabelInput={label}
                namePlaceholderInput={placeholder as string}
                typeInput={type}
              />
            </fieldset>
          ) : (

            
            <fieldset key={id}>
              <AuthorizationInput
                name={id}
                namePlaceholderInput={label}
                control={control}
                errors={errors}
              />
              
            </fieldset>
          )
        )}
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
  );
}
