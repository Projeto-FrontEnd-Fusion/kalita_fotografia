import { HeroBanner } from "./_components/Hero/HeroBanner";
import { HeaderHeadings } from "../shared/ui/home/HeaderHeadings";
import { Testimony } from "./_components/testimony/Testimony";
import { Title } from "../shared/ui/headings/Title";
import { Description } from "../shared/ui/headings/Description";
import { ButtonCTA } from "../shared/ui/ButtonCTA";

//ARQUIVO DE ROTAS
export default function Home() {
  return (
    <main className="flex flex-col gap-18">
      <HeroBanner />
      <HeaderHeadings />
      <Testimony />

      <article className="flex flex-col md:gap-8 px-4 items-center mb-20">
        <h2 className="text-center lg:w-10/12 whitespace-pre-line md:whitespace-normal center-title-small font-antonio text-kalita-brown-dark lg:text-5xl">
          {`Entre o silêncio e o primeiro  \n choro, existe uma história`}
        </h2>
        <p
          className={`text-center lg:w-6/12 whitespace-pre-line md:whitespace-normal center-description-small font-nunito leading-relaxed text-lg lg:text-2xl `}
        >
          {`Registros espontâneos, cheios de verdade. Um olhar sensível para momentos que merecem ser
                lembrados como realmente foram. `}
        </p>
        <ButtonCTA size="medium" content="Conheça o portfólio" href="/portfolio" />
      </article>
    </main>
  );
}
