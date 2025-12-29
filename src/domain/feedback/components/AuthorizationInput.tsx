import ErrorMessage from "@/app/shared/ui/form/ErrorMessage";
import { Controller } from "react-hook-form";
import { AuthorizationInputProps } from "../types/AuthorizationInputProps";

export function AuthorizationInput({ name, namePlaceholderInput, control, errors }: AuthorizationInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center gap-[13px] px-4 py-[22px] bg-kalita-brown-dark rounded-sm">
            <input
              type="checkbox"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              className="h-[18px] w-[18px]"
            />
            <p className="text-kalita-bg-light text-sm font-nunito">
              {namePlaceholderInput}
            </p>
          </div>
          <div className="mt-4 md:m-0">
            <ErrorMessage message={errors?.[name]?.message} />
          </div>
        </div>

      )}
    />
  )
}