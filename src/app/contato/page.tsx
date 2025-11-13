"use client";

import ContactForm from "@/domain/contact/components/contact-form";

export default function ContactPage() {

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
        <ContactForm />

      </div>
    </section>
  );
}