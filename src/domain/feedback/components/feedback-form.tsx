

export function FeedbackForm() {
  return (
    <div className="flex flex-col gap-10 bg-kalita-bg-medium py-8 px-12 border border-kalita-bg-light-brown rounded-lg">
      <div className="flex flex-col gap-3">
        <label className="text-base font-nunito font-semibold text-kalita-brown-dark leading-normal">Seu nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="h-[52px] px-8 border border-kalita-bg-light-brown bg-kalita-bg-light placeholder:text-kalita-bg-light-brown placeholder:text-sm rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-base font-nunito font-semibold text-kalita-brown-dark leading-normal">Qual foi o tipo de sessão?</label>
        <input
          type="text"
          placeholder="Parto, acompanhamento do bebê, gestante..."
          className="h-[52px] px-8 border border-kalita-bg-light-brown bg-kalita-bg-light placeholder:text-kalita-bg-light-brown placeholder:text-sm rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-base font-nunito font-semibold text-kalita-brown-dark leading-normal">Seu depoimento:</label>
        <textarea
          placeholder="Descreva aqui a sua experiência..."
          className="h-[140px] px-8 py-4 border border-kalita-bg-light-brown bg-kalita-bg-light placeholder:text-kalita-bg-light-brown placeholder:text-sm resize-none rounded-sm"
        />
      </div>

      <div className="flex justify-center items-center gap-[13px] px-4 py-[22px] bg-kalita-brown-dark rounded-sm">
        <input
          type="checkbox"
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
        />
        <p className="text-kalita-bg-light text-sm font-nunito">
          Autorizo a publicação deste feedback no site Kálita Fotografias. Entendo que meu nome e depoimento poderão ser exibidos publicamente.
        </p>
      </div>

      <button
        className="bg-kalita-brown-medium text-kalita-bg-light h-[52px] hover:bg-kalita-brown-dark cursor-pointer rounded-md"
      >
        Enviar
      </button>
    </div>
  )
}