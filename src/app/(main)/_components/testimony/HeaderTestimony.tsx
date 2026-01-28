export const HeaderTestimony = () => {
  return (
    <header className={`z-20 absolute top-2
    md:top-12 md:px-12`}>
      <h2 className={`text-[12px] font-nunito-sans text-white/80 whitespace-pre-line 
        leading-4 px-2 
        md:text-[28px] md:leading-8`}>
        <span className="md:hidden italic">
          Depoimentos que <br /> revelam o lado mais <br /> bonito do meu
          trabalho: <br /> a conexão.
        </span>
        <span className="hidden md:flex italic">
          Depoimentos que revelam o lado mais <br /> bonito do meu trabalho: a
          conexão.
        </span>
      </h2>
    </header>
  );
};
