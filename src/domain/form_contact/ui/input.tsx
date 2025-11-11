"use client";
import { Controller } from "react-hook-form";
import { IInputProps } from "../types/Input";
import clsx from "clsx";
import ErrorMessage from "./ErrorMessage";


export default function Input({
  name,
  control,
  errors,
  nameInput,
  nameLabelInput,
  namePlaceholderInput,
  typeInput,
}: IInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col gap-2 w-full h-24">
          <label htmlFor={nameLabelInput}>
            <span className="font-nunito font-semibold leading-[1.5] text-[1rem] text-kalita-brown-dark">
              {nameInput}
            </span>
          </label>

          <input
            {...field}
            id={nameLabelInput}
            name={nameLabelInput}
            type={typeInput}
            placeholder={namePlaceholderInput}
            className={clsx(
              "w-full py-4 px-8 bg-kalita-bg-light border-[0.063rem] rounded-[0.25rem] font-nunito text-kalita-bg-light-brown text-[0.875rem] outline-0",
              {
                "border-kalita-error": errors[name],
                "border-kalita-bg-light-brown": !errors[name],
              }
            )}
          />
          <ErrorMessage message={errors?.[name]?.message} />
        </div>
      )}
    />
  );
}
