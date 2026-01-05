"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStashPackage } from '../hooks/useStashPackage';
import DropzonePackage from '../components/dropzone';
import { PackageFormData } from '../types/package';

export default function FormsPackage() {
  const { addPackage } = useStashPackage();
  const router = useRouter();

  const [formData, setFormData] = useState<PackageFormData>({
    titlePackage: '',
    descriptionPackage: '',
    pricePackage: '',
    plusInformationPackage: '',
    images: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.titlePackage || !formData.pricePackage) {
      alert("Por favor, preencha o título e o valor.");
      return;
    }

    addPackage(formData);
    router.push('/dashboard/package');
  };

  return (
    <section className="flex flex-col items-center lg:items-start w-full px-6 py-8 md:px-10 max-w-4xl mx-auto">
      <header className="mb-10 text-center lg:text-left w-full">
        <h1 className="font-nunito font-semibold text-3xl text-kalita-brown-dark">
          Gestão de Pacotes
        </h1>
        <p className="text-sm text-kalita-brown-dark/70 mt-2 italic">
          Crie uma nova oferta fotográfica para seus clientes.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        {/* Título */}
        <div className="flex flex-col gap-2">
          <label htmlFor="titlePackage" className="font-nunito font-medium text-kalita-brown-dark text-base">
            Título do Pacote
          </label>
          <input
            id="titlePackage"
            name="titlePackage"
            value={formData.titlePackage}
            onChange={handleInputChange}
            className="font-nunito text-sm border-2 border-stone-200 bg-kalita-bg-light rounded-md px-4 py-3 outline-none focus:border-kalita-brown-medium transition-all"
            placeholder="Ex: Ensaio de Natal Premium"
            type="text"
          />
        </div>

        {/* Descrição */}
        <div className="flex flex-col gap-2">
          <label htmlFor="descriptionPackage" className="font-nunito font-medium text-kalita-brown-dark text-base">
            Descrição
          </label>
          <textarea
            id="descriptionPackage"
            name="descriptionPackage"
            value={formData.descriptionPackage}
            onChange={handleInputChange}
            className="font-nunito text-sm h-32 border-2 border-stone-200 bg-kalita-bg-light rounded-md px-4 py-3 outline-none focus:border-kalita-brown-medium resize-none transition-all"
            placeholder="Ex: Detalhe o que inclui, tempo de sessão, número de fotos..."
          />
        </div>

        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Valor */}
          <div className="flex flex-col gap-2 md:w-1/3">
            <label htmlFor="pricePackage" className="font-nunito font-medium text-kalita-brown-dark text-base">
              Valor (R$)
            </label>
            <input
              id="pricePackage"
              name="pricePackage"
              value={formData.pricePackage}
              onChange={handleInputChange}
              className="font-nunito text-sm border-2 border-stone-200 bg-kalita-bg-light rounded-md px-4 py-3 outline-none focus:border-kalita-brown-medium transition-all"
              placeholder="0,00"
              type="text"
            />
          </div>

          {/* Info Extra */}
          <div className="flex flex-col gap-2 md:flex-1">
            <label htmlFor="plusInformationPackage" className="font-nunito font-medium text-kalita-brown-dark text-base">
              Informações adicionais
            </label>
            <input
              id="plusInformationPackage"
              name="plusInformationPackage"
              value={formData.plusInformationPackage}
              onChange={handleInputChange}
              className="font-nunito text-sm border-2 border-stone-200 bg-kalita-bg-light rounded-md px-4 py-3 outline-none focus:border-kalita-brown-medium transition-all"
              placeholder="Ex: Disponível apenas para fins de semana."
              type="text"
            />
          </div>
        </div>

        {/* Dropzone */}
        <div className="flex flex-col gap-2">
          <label className="font-nunito font-medium text-kalita-brown-dark text-base italic">
            Fotos do Pacote (Máximo 2)
          </label>
          <DropzonePackage
            onFilesChange={(base64Images) => setFormData(prev => ({ ...prev, images: base64Images }))}
            initialFiles={formData.images}
          />
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mt-6">
          <button 
            type="submit" 
            className="flex-1 md:flex-none md:w-48 bg-kalita-brown-medium text-kalita-bg-light font-nunito font-bold py-4 rounded-md hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
          >
            Criar Pacote
          </button>
          <button 
            type="button" 
            onClick={() => router.back()} 
            className="flex-1 md:flex-none md:w-48 text-center border-2 border-stone-200 bg-kalita-bg-light text-kalita-brown-medium font-nunito font-bold py-4 rounded-md hover:border-kalita-brown-medium hover:bg-white transition-all shadow-sm"
          >
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}