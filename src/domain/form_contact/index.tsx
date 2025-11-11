"use client";

import React, { useEffect, useState } from "react";
import Input from "./ui/input";
import CustomSelect from "./ui/CustomSelect";
import CustomTextArea from "./ui/CustomTextArea";
import CustomPhone from "./ui/CustomPhone";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formContactSchema,
  formContactType,
} from "./schema/validation-form-contact";
import { Modal } from "./ui/Modal";

export default function FormsContact() {
  
  const {
    handleSubmit,
    control,
    reset, 
    formState: { errors },
  } = useForm<formContactType>({
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      photo_session_type: "",
      message: "",
    },
    resolver: zodResolver(formContactSchema),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
        reset();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isModalOpen, reset]);


  function handleSubmitFormContact(data: formContactType) {
    /*Cenario de teste de envios de dados via API.*/ 
    console.log("Dados enviados:", data);
    setIsModalOpen(true);
  }

  return (
    <section className="flex items-center justify-center min-h-screen px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-80 max-w-6xl w-full">
        <div className="flex flex-col lg:items-start lg:w-96 lg:h-40 gap-6 text-center lg:text-left">
          <span className="font-antonio text-kalita-brown-dark text-4xl lg:text-5xl">
            Entre em contato
          </span>
          <span className="font-nunito text-kalita-brown-medium leading-relaxed text-lg lg:text-2xl">
            Preencha o formulário e vamos conversar melhor sobre seu ensaio.
          </span>
        </div>

        <form className="w-full" onSubmit={handleSubmit(handleSubmitFormContact)}>
          <section className="flex flex-col gap-8">
            <Input
              name="full_name"
              control={control}
              errors={errors}
              nameInput="Nome completo"
              nameLabelInput="full_name"
              namePlaceholderInput="Digite seu nome"
              typeInput="text"
            />

            <Input
              name="email"
              control={control}
              errors={errors}
              nameInput="E-mail"
              nameLabelInput="email"
              namePlaceholderInput="Digite seu e-mail"
              typeInput="email"
            />

            <CustomPhone
              label="Telefone"
              name="phone"
              control={control}
              placeholder="Digite seu telefone"
              errors={errors}
            />

            <CustomSelect
              name="photo_session_type"
              control={control}
              errors={errors}
            />

            <CustomTextArea
              name="message"
              control={control}
              errors={errors}
            />

            <button
              className="bg-kalita-brown-medium w-full h-16 px-8 py-4 
              flex justify-center items-center gap-2 cursor-pointer 
              rounded-md transition-colors duration-300 hover:bg-kalita-brown-dark"
              type="submit"
            >
              <span className="font-nunito font-normal text-kalita-bg-light text-lg">
                Enviar
              </span>
            </button>

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Formulário enviado com sucesso!"
              message="Sua mensagem foi enviada. Entraremos em contato em breve."
            />
          </section>
        </form>
      </div>
    </section>
  );
}
