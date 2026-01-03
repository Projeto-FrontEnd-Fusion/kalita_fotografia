import Image from "next/image";
import Link from 'next/link'

import { Title } from "@/app/shared/ui/headings/Title"
import { SubTitle } from "@/app/shared/ui/headings/Subtitle"
import { Description } from "@/app/shared/ui/headings/Description"
import { ButtonCTA } from "@/app/shared/ui/ButtonCTA";
import { ButtonCTACustom } from "@/app/shared/ui/ButtonCTACustom";

interface TagsSectionProps {
  txtTags: string[];
}


export default function SobreMim(){
    const txtTags= [
        "Gestar", "Nascimentos", "Primeiros dias", "Festinhas",
        "Ensaio de família", "Acompanhamento trimestral do bebê",
        "Especiais: Dia das mãe e Natal"
    ];
    
    return(
        <>
            <section className="container mx-auto py-6 md:py-10  flex flex-col justify-center items-center">
                <Title content="Sobre mim" align="center" size="larger"/>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 lg:mt-20 md:mx-10 lg:mx-0">
                    {/* Txt Capturando Momentos */}
                    <div className="flex flex-col space-y-6 lg:w-1/2 text-center lg:text-left order-2 md:order-1">
                        <article className="container mx-auto">

                            {/* Texto para outras telas */}
                            <div className="block lg:hidden space-y-5">
                                <Title 
                                    content={'Capturando momentos que \n realmente importam'} 
                                    align="center" size="medium"
                                />

                                <SubTitle 
                                content="Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                                        Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. 
                                        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                                        Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                                        Ut hendrerit semper vel class aptent taciti sociosqu. 
                                        Ad litora torquent per conubia nostra inceptos himenaeos."
                                align="center" size="small" 
                            />
                            </div>

                            {/* Texto para desktop */}
                            <div className="hidden lg:block space-y-5">
                                <Title 
                                    content={'Capturando momentos que \n realmente importam'} 
                                    align="left" size="medium"
                                />

                                <SubTitle 
                                content="Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                                        Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. 
                                        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. 
                                        "
                                align="left" size="small" 
                            />
                            </div>

                            
                        </article>

                        
                        {/* Serviços para mobile e desktop */}
                        <div className="md:hidden lg:block">
                            <TagsSection txtTags={txtTags}/>
                        </div>
                    </div>
                    
                    {/* Imagem */}
                    <div className="relative order-1 md:order-2 shrink-0">
                        <div className="hidden md:block absolute -top-4 -right-4 lg:left-4 lg:h-[661px] w-full h-full border border-kalita-bg-light-brown rounded-lg"/>
                        <div className="relative w-[412px] h-[254px] md:w-[264px] md:h-[382px] lg:w-[520px] lg:h-[631px] overflow-hidden rounded-lg bg-gray-200">
                            <Image 
                                src="/Caminho.jpg"
                                alt="Família"
                                fill
                                className="object-cover"
                            />
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-gray-500">520 x 631</span>
                            </div>

                        </div>
                    </div> 
                </div>

                {/* Serviços especifico para Tablet */}
                <div className="hidden md:block lg:hidden w-full">
                    <TagsSection txtTags={txtTags}/>
                </div>

                {/* O que é fotografia documental */}
                <div className="flex flex-col justify-center items-center mt-20 text-center md:mx-10 lg:mx-0">
                    <div className="flex justify-center max-w-60 md:max-w-none w-full">
                        <Title content="O que é fotografia documental?" align="center" size="larger" />
                    </div>
                    
                    <div className="mt-8">
                        <SubTitle 
                            content="Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                                    Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                                    In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. 
                                    Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                                    Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
                            align="center"
                            size="small"
                        />
                    </div>
                </div>


                {/* Pronto para registrar o que realmente importa */}
                <div className="lg:container flex flex-col justify-center items-center mt-20 py-12 px-4 md:px-20  gap-4 bg-kalita-brown-dark rounded-lg text-center ">
                    <h3 className="text-white font-medium text-2xl md:text-3xl lg:text-4xl w-full md:max-w-lg lg:max-w-none text-center">
                        Pronto para registrar o que realmente importa?
                    </h3>

                    <div className="flex justify-center w-full md:max-w-lg lg:min-w-full">
                        <Description 
                            content="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem." 
                            addClass="text-kalita-bg-light-brown"
                            align="center" 
                            size="small" 
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href={'/contato'} className="w-full sm:w-auto">
                            <ButtonCTA content="Fale comigo" size="small" />
                        </Link>

                        <Link href={'/portfolio'} className="w-full sm:w-auto">
                            <ButtonCTACustom content="Veja o Portfólio" size="small" />
                        </Link>
                        
                    </div>
                </div>
            </section>
        </>
    )
}


{/* codigo das Tags de serviços */}
export function TagsSection({txtTags} : TagsSectionProps){
    return(
        <div className="flex flex-col items-center lg:items-start space-y-6  md:mx-10 lg:mx-0">
            <h3 className="text-kalita-brown-dark font-medium text-3xl lg:text-4xl my-12">
                Conheça os meus serviços: 
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 w-full  text-kalita-brown-medium">
                {txtTags.slice(0, 4).map((tag) => (
                    <div key={tag} className="flex items-center justify-center px-4 py-2 border border-kalita-bg-light-brown rounded-lg font-medium text-xs lg:text-base">
                        {tag}
                    </div>
                ))}

                {txtTags.slice(4, 5).map((tag) => (
                    <div key={tag} className="col-span-2 md:col-span-2 flex items-center justify-center px-4 py-2 border border-kalita-bg-light-brown rounded-xl font-medium text-xs md:text-sm lg:text-base">
                        {tag}
                    </div>
                ))}
                
                {txtTags.slice(5, 6).map((tag) => (
                    <span className="col-span-3 md:col-span-2 flex items-center justify-center px-4 py-2 border border-kalita-bg-light-brown rounded-xl font-medium text-xs md:text-sm lg:text-base">
                        {tag}
                    </span>
                ))}
                                
                {txtTags.slice(6, 7).map((tag) => (
                    <span className="col-span-3 md:col-span-4 flex items-center justify-center px-4 py-2 border border-kalita-bg-light-brown rounded-xl font-medium text-xs md:text-sm lg:text-base">
                        {tag}
                    </span>
                ))}
                
            </div>
        </div>
    )
}