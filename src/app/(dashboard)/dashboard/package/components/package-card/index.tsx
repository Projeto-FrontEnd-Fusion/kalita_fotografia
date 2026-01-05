"use client";

import { Eye, EyeOff } from 'lucide-react'
import { useStashPackage } from '../../hooks/useStashPackage';
import React, { useState } from 'react'
import DeleteModalPackage from '../DeleteModalPackage';
import SucessModalPackage from '../SucessModalPackage';
import { PackageCardProps } from '../../types/package';
import { useRouter } from 'next/navigation';


export default function PackageCard({ 
    idPackage, 
    status, 
    title, 
    description, 
    price, 
    isPublished 
}: PackageCardProps) {

    const { deletePackage } = useStashPackage();
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalSucess, setopenModalSucess] = useState(false);
      const router = useRouter();

    const handleClickSucessPackage = () => setopenModalSucess(true);
    const handleClickDeletePackage = () => setOpenModalDelete(true);

    return (
        <article className='flex w-full justify-center px-4 mt-6'>
            <div className='w-full max-w-sm md:max-w-4xl p-6 bg-kalita-bg-light rounded-xl border border-kalita-brown-medium/30 shadow-sm'>
                <div className='flex flex-col md:flex-row md:justify-between gap-6'>
                    
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between items-start w-full gap-2'>
                            <h2 className='font-nunito font-bold text-lg text-kalita-brown-dark leading-tight'>
                                {title}
                            </h2>
                            <div className={`flex items-center justify-center rounded-full px-3 py-1 shrink-0 ${status === 'Aprovado' ? 'bg-kalita-brown-dark' : 'bg-stone-400'}`}>
                                <span className='font-nunito font-semibold text-[10px] text-kalita-bg-light uppercase tracking-wider'>
                                    {status}
                                </span>
                            </div>
                        </div>

                        <p className='font-nunito font-normal text-sm text-kalita-brown-medium leading-relaxed'>
                            {description}
                        </p>

                        <hr className='w-full border-t-2 border-kalita-brown-medium' />

                        <div className='flex justify-center md:justify-start w-full py-2'>
                            <span className='font-nunito font-bold text-3xl text-[#231F20]'>
                                R$ {price}
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-row md:flex-col justify-between items-center gap-2 md:w-32 shrink-0'>
                        <button
                         onClick={() => router.push(`/dashboard/package/${idPackage}/form_update`)} 
                         className='flex-1 md:w-full h-10 border border-kalita-brown-dark rounded-md font-nunito font-medium text-sm text-kalita-brown-dark hover:bg-kalita-bg-light transition-colors'>
                            Editar
                        </button>

                        <button
                            onClick={handleClickSucessPackage}
                            className={`flex items-center justify-center h-10 border rounded-md transition-all gap-2
                                ${isPublished 
                                    ? 'bg-emerald-600 border-emerald-600 text-kalita-bg-light' 
                                    : 'bg-transparent border-kalita-brown-dark text-kalita-brown-dark'}
                                w-14 md:w-full`}
                        >
                            <span className='md:hidden'>
                                {isPublished ? <Eye size={18} /> : <EyeOff size={18} />}
                            </span>
                            <span className='hidden md:block font-nunito text-sm font-normal'>
                                {isPublished ? 'Despublicar' : 'Publicar'}
                            </span>
                        </button>

                        <button onClick={handleClickDeletePackage} className='flex-1 md:w-full h-10 bg-kalita-error border border-kalita-error rounded-md font-nunito font-medium text-sm text-kalita-bg-light hover:opacity-90 transition-colors'>
                            Apagar
                        </button>

                        <SucessModalPackage
                            open={openModalSucess}
                            onClose={() => setopenModalSucess(false)}
                        />

                        <DeleteModalPackage
                            open={openModalDelete}
                            onClose={() => setOpenModalDelete(false)}
                            // PASSANDO A FUNÇÃO DE DELETAR
                            onConfirm={() => {
                                deletePackage(idPackage);
                                setOpenModalDelete(false);
                            }}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}