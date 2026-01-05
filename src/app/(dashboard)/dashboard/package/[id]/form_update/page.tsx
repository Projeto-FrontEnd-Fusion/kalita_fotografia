"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useStashPackage } from '../../hooks/useStashPackage';
import DropzonePackage from '../../components/dropzone';
import { PackageFormData } from '../../types/package';

export default function FormsPackage() {
  const router = useRouter();
  const { id } = useParams();
  const idToEdit = id as string;

  const { addPackage, updatePackage, getPackageById, isLoaded } = useStashPackage();

  const [formData, setFormData] = useState<PackageFormData>({
    titlePackage: '',
    descriptionPackage: '',
    pricePackage: '',
    plusInformationPackage: '',
    images: []
  });

  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (idToEdit && isLoaded && !hasInitialized) {
      const pkg = getPackageById(idToEdit);
      if (pkg) {
        setFormData({
          titlePackage: pkg.titlePackage,
          descriptionPackage: pkg.descriptionPackage,
          pricePackage: pkg.pricePackage,
          plusInformationPackage: pkg.plusInformationPackage,
          images: pkg.images || []
        });
        setHasInitialized(true);
      }
    }
  }, [idToEdit, isLoaded, getPackageById, hasInitialized]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.titlePackage || !formData.pricePackage) {
      alert("Título e Valor são obrigatórios.");
      return;
    }if (idToEdit) {
      updatePackage(idToEdit, formData);
    } else {
      addPackage(formData);
    }

    router.push('/dashboard/package');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="flex flex-col items-center lg:items-start w-full px-6 py-8 md:px-10 max-w-4xl mx-auto">
      <header className="mb-10 text-center lg:text-left w-full">
        <h1 className="font-nunito font-semibold text-3xl text-kalita-brown-dark italic">
          {idToEdit ? 'Editar Pacote' : 'Gestão de Pacotes'}
        </h1>
        <p className="text-sm text-kalita-brown-dark/70 mt-2">
          {idToEdit ? `Modificando: ${formData.titlePackage}` : 'Crie uma nova oferta fotográfica.'}
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        
        {/* Campo: Título */}
        <div className="flex flex-col gap-2">
          <label className="font-nunito font-medium text-kalita-brown-dark">Título do Pacote</label>
          <input
            name="titlePackage"
            value={formData.titlePackage}
            onChange={handleInputChange}
            placeholder="Ex: Ensaio Gestante Premium"
            className="border-2 border-stone-200 bg-kalita-bg-light rounded-md px-4 py-3 outline-none focus:border-kalita-brown-medium transition-colors"
            type="text"
          />
        </div>

        {/* Campo: Descrição */}
        <div className="flex flex-col gap-2">
          <label className="font-nunito font-medium text-kalita-brown-dark">Descrição</label>
          <textarea
            name="descriptionPackage"
            value={formData.descriptionPackage}
            onChange={handleInputChange}
            placeholder="Detalhe o que está incluso no pacote..."
            className="h-32 border-2 border-stone-200 bg-kalita-bg-light rounded-md px-4 py-3 outline-none focus:border-kalita-brown-medium resize-none transition-colors"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Campo: Valor */}
          <div className="flex flex-col gap-2 md:w-1/3">
            <label className="font-nunito font-medium text-kalita-brown-dark">Valor (R$)</label>
            <input
              name="pricePackage"
              value={formData.pricePackage}
              onChange={handleInputChange}
              className="border-2 border-stone-200 bg-kalita-bg-light rounded-md px-4 py-3 outline-none focus:border-kalita-brown-medium transition-colors"
              type="text"
            />
          </div>

          {/* Campo: Info Adicional */}
          <div className="flex flex-col gap-2 md:flex-1">
            <label className="font-nunito font-medium text-kalita-brown-dark">Informações adicionais</label>
            <input
              name="plusInformationPackage"
              value={formData.plusInformationPackage}
              onChange={handleInputChange}
              placeholder="Ex: 20 fotos editadas, 2h de ensaio"
              className="border-2 border-stone-200 bg-kalita-bg-light rounded-md px-4 py-3 outline-none focus:border-kalita-brown-medium transition-colors"
              type="text"
            />
          </div>
        </div>

        {/* Dropzone integrado */}
        <div className="flex flex-col gap-2">
          <label className="font-nunito font-medium text-kalita-brown-dark text-base">Fotos do Pacote</label>
          <DropzonePackage
            onFilesChange={(base64Images) => setFormData(prev => ({ ...prev, images: base64Images }))}
            initialFiles={formData.images}
          />
        </div>

        {/* Ações */}
        <div className="flex gap-4 mt-8">
          <button 
            type="submit" 
            className="flex-1 md:w-56 bg-kalita-brown-medium text-kalita-bg-light font-bold py-4 rounded-md shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            {idToEdit ? 'Confirmar Edição' : 'Criar Pacote'}
          </button>
          <button 
            type="button" 
            onClick={() => router.back()} 
            className="flex-1 md:w-48 border-2 border-stone-200 text-kalita-brown-medium font-bold py-4 rounded-md hover:bg-stone-50 transition-all"
          >
            Voltar
          </button>
        </div>
      </form>
    </section>
  );
}