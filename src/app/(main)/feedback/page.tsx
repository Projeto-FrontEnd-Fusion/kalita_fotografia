import { FeedbackForm } from "@/domain/feedback/components/feedback-form";


export default function FeedbackPage() {
  return (
    <div className="flex justify-center pt-[46px] pb-[86px]">
      <div className="flex flex-col gap-6 px-6">
        {/* Feedback title */}
        <div className="text-center">
          <h1 className="text-kalita-brown-dark font-bold font-antonio text-[32px] md:text-5xl">Compartilhe sua experiência</h1>
          <p className="text-kalita-brown-medium font-normal font-nunito text-lg md:text-2xl mt-6">
            Seu feedback é muito importante! Conte mais sobre sua experiência.
          </p>
        </div>

        {/* Feedback Form */}
        <FeedbackForm />
      </div>
    </div>
  )
}