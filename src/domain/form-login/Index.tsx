"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formLoginSchema, formLoginType } from './schema/validation-form-login'
import { GoChevronDown } from 'react-icons/go'
import Input from './ui/Input'
import Image from 'next/image'
import PhotoBaby from '../../../public/photo-baby.webp'
import CustomPassword from './ui/CustomPassword'

export default function FormLogin() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formLoginType>({
    resolver: zodResolver(formLoginSchema),
    mode: "onSubmit",
  })

  function handleSubmitFormLogin(data: formLoginType) {/*Enviar dados via API*/ }

  return (
    <section className="flex flex-col md:flex-row min-h-screen">

      <div className="relative w-full md:w-1/2 h-[250px] md:h-screen order-1 md:order-2">
        <Image
          src={PhotoBaby}
          alt="photo-baby"
          fill
          className="rounded-br-2xl rounded-bl-2xl md:rounded-tl-2xl md:rounded-bl-2xl object-cover object-center"
          priority
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-6 py-10 order-2 md:order-1">
        <form
          onSubmit={handleSubmit(handleSubmitFormLogin)}
          className="flex flex-col gap-10 w-full max-w-[32.5rem]"
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl text-kalita-brown-dark rotate-90">
              <GoChevronDown />
            </span>
            <span className="font-nunito text-sm font-semibold">
              Voltar ao site
            </span>
          </div>

          <h1 className="font-antonio text-3xl md:text-5xl text-kalita-brown-dark text-center md:text-left">
            Área Administrativa
          </h1>

          <Input
            name="email"
            control={control}
            errors={errors}
            nameInput="E-mail"
            nameLabelInput="email"
            namePlaceholderInput="Digite seu email"
            typeInput="text"
          />

          <CustomPassword
            name="password"
            control={control}
            errors={errors}
            nameInput="Senha"
            nameLabelInput="password"
            namePlaceholderInput="Digite sua senha"
          />


          <div className="flex justify-end">
            <span className="font-nunito text-sm text-kalita-brown-medium underline cursor-pointer">
              Esqueceu sua senha?
            </span>
          </div>

          <button
            className="bg-kalita-brown-medium w-full h-14 md:h-16 px-6 flex justify-center cursor-pointer items-center gap-2 rounded-md hover:bg-kalita-brown-dark transition"
            type="submit"
          >
            <span className="font-nunito text-base md:text-lg text-kalita-bg-light">
              Enviar
            </span>
          </button>
        </form>
      </div>

    </section>
  )
}
