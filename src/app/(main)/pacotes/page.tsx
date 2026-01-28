import { ButtonCTA } from "@/app/shared/ui/ButtonCTA";
import { Title } from "@/app/shared/ui/headings/Title";
import Image from "next/image";

export interface PackageCTA {
  label: string;
  href: string;
  size: "small" | "medium" | "large";
}

export interface Package {
  title: string;
  description: string;
  price: string;
  promotion: string;
  cta: PackageCTA;
}

export const packages = [
  {
    title: "Ensaio de Natal (2025)",
    description:
      "Celebre a chegada do Natal com um ensaio fotográfico especial. Este pacote exclusivo inclui sessão em ambiente natural, edição profissional de todas as fotos e álbum digital personalizado.",
    price: "R$ 1.500,00",
    promotion: "Promoção disponível e válida até 10/12/2025",
    cta: {
      label: "Entrar em Contato",
      href: "/contato",
      size: "small",
    },
  },
  {
    title: "Ensaio Familiar",
    description:
      "Registre momentos únicos em família com um ensaio acolhedor e espontâneo. Inclui direção de poses, edição profissional e entrega digital em alta resolução.",
    price: "R$ 1.200,00",
    promotion: "Vagas limitadas para este mês",
    cta: {
      label: "Entrar em Contato",
      href: "/contato",
      size: "small",
    },
  },
  {
    title: "Ensaio Infantil",
    description:
      "Um ensaio pensado para eternizar a infância com leveza e diversão. Sessão descontraída, edição cuidadosa e galeria digital personalizada.",
    price: "R$ 900,00",
    promotion: "Indicado para crianças de até 10 anos",
    cta: {
      label: "Entrar em Contato",
      href: "/contato",
      size: "small",
    },
  },
  {
    title: "Ensaio Casal",
    description:
      "Celebre o amor com um ensaio romântico e autêntico. Ideal para noivos, aniversários de relacionamento ou datas especiais.",
    price: "R$ 1.100,00",
    promotion: "Agende com antecedência e garanta sua vaga",
    cta: {
      label: "Entrar em Contato",
      href: "/contato",
      size: "small",
    },
  },
  {
    title: "Ensaio Corporativo",
    description:
      "Fortaleça sua imagem profissional com um ensaio corporativo moderno. Fotos ideais para LinkedIn, sites institucionais e materiais de marketing.",
    price: "R$ 1.300,00",
    promotion: "Desconto especial para empresas",
    cta: {
      label: "Entrar em Contato",
      href: "/contato",
      size: "small",
    },
  },
] satisfies Package[];

export default function Packages() {
  return (
    <main>
      <header className="h-32 md:h-64 flex items-center justify-center">
        <Title
          size="small"
          content={`Conheça \n nossos pacotes especiais`}
          align="center"
        />
      </header>
      <div className="flex">
        <figure className="relative w-1/2 h-50 md:h-112 aspect-auto overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dda8z5n1i/image/upload/v1765229427/kalita_fotografia_uploads/ft6swo5pfopkh02yd38s.jpg"
            fill
            quality={100}
            alt="imagem de alguma coisa"
            className="object-cover hover:brightness-75 hover:scale-110 transition-all duration-200"
          />
        </figure>

        <figure className="relative w-1/2 h-50 md:h-112 aspect-auto overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/6134649/pexels-photo-6134649.jpeg"
            fill
            quality={100}
            alt="imagem de alguma coisa"
            className="object-cover hover:brightness-75 hover:scale-110 transition-all duration-200"
          />
        </figure>
      </div>

      <section className=" py-12 gap-8 flex flex-col items-center justify-center bg-kalita-bg-medium-2/30 md:bg-white">
        {packages.map(
          ({ title, description, price, promotion, cta }, index) => (
            <div
              key={index}
              className="shadow h-80 lg:h-96 lg:p-6 rounded-lg w-11/12 lg:w-8/12 mx-auto bg-white md:bg-kalita-bg-medium-2/30  flex flex-col justify-center"
            >
              <header className="px-4 flex flex-col gap-2 ">
                <h2 className="lg:w-10/12 whitespace-pre-line md:whitespace-normal text-2xl font-antonio text-kalita-brown-dark">
                  {title}
                </h2>
                <p className="text-[14px] text-kalita-brown-dark/70  pb-6 md:w-8/12">
                  {description}
                </p>
              </header>

              <div className="md:py-8 flex flex-col md:flex-row md:justify-between gap-6 px-4 py-4 md:border-t border-kalita-bg-light-brown/50">
                <fieldset>
                  <h2 className="font-bold text-[1.4rem] text-kalita-brown-medium md:text-3xl">
                    {price}
                  </h2>
                  <p className="text-[12px] text-kalita-brown-medium/70">
                    * {promotion}
                  </p>
                </fieldset>

                <ButtonCTA
                  content={cta.label}
                  size={cta.size}
                  className="w-full"
                  href={cta.href}
                />
              </div>
            </div>
          ),
        )}
      </section>
    </main>
  );
}
