import React from "react";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import ErrorMessage from "./ErrorMessage";
import clsx from "clsx";
import type { ICustomPhone } from "./types/CustomPhone";

export default function CustomPhone({
  label,
  name,
  control,
  placeholder,
  errors,
}: ICustomPhone) {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label
          htmlFor={name}
          className="font-nunito font-semibold leading-[1.5] text-[1rem] text-kalita-brown-dark"
        >
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <>
            <IMaskInput
              id={name}
              mask="(00) 00000-0000"
              value={value}
              onAccept={(val: string) => onChange(val)}
              onBlur={onBlur}
              inputRef={ref}
              placeholder={placeholder}
              autoComplete="off"
              className={clsx(
                "w-full py-4 px-8 rounded-[0.25rem] font-nunito text-[0.875rem] outline-none transition-all duration-300 bg-kalita-bg-light text-kalita-bg-light-brown border-[0.063rem]",
                {
                  "border-kalita-bg-light-brown": !errors?.[name],
                  "border-kalita-error": errors?.[name],
                }
              )}

            />
            <ErrorMessage message={errors?.[name]?.message} />
          </>
        )}
      />
    </div>
  );
}
