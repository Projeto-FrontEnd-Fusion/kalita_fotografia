"use client"; 

import Link from "next/link";
import PackageCard from "./components/package-card";
import { useStashPackage } from "./hooks/useStashPackage";


export default function PackageManagement() {

  const { packages } = useStashPackage();

  return (
    <section>
      <header className="w-full px-4 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center text-center mt-10 gap-6 md:flex-row md:justify-between md:text-left md:items-center">

     
          <div className="flex flex-col gap-1">
            <h1 className="font-nunito font-semibold text-4xl md:text-3xl lg:text-4xl text-kalita-brown-dark leading-tight">
              Gestão de Pacotes
            </h1>
            <p className="font-nunito font-normal text-sm md:text-sm text-kalita-brown-dark/70">
              Gerencie seus pacotes fotográficos e ofertas.
            </p>
          </div>

          <Link
            href="/dashboard/pacotes-sazonais/form"
            className="inline-flex items-center justify-center h-12 px-10 rounded-lg bg-kalita-brown-medium
          text-kalita-bg-light font-nunito text-sm font-normal 
          transition-all active:scale-95 hover:brightness-110 shadow-md w-40 max-w-[280px] md:w-auto"
          >
            Criar Pacote
          </Link>
        </div>
      </header>


      <div className="w-full flex flex-col items-center gap-4 mt-8 pb-10">
        {packages.length > 0 ? (
          packages.map((item) => (
            <PackageCard 
              idPackage={item.idPackage}
              key={item.idPackage} 
              title={item.titlePackage} 
              description={item.descriptionPackage} 
              price={item.pricePackage} 
              status={item.status} 
              isPublished={item.isPublished}
            />
          ))
        ) : (
          /* Estado Vazio: Bom para UX */
          <div className="mt-10 text-center opacity-50 font-nunito">
            <p>Nenhum pacote cadastrado ainda.</p>
          </div>
        )}
      </div>
    </section>
  );
}