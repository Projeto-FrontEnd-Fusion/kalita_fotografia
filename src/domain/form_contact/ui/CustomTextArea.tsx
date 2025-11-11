"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { CustomTextAreaProps } from "../types/CustomTextArea";
import ErrorMessage from "./ErrorMessage";
import clsx from "clsx";


export default function CustomTextArea({ name, control, errors }: CustomTextAreaProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col gap-2 w-full h-48">
          <label
            className="font-nunito font-semibold leading-[1.5] text-[1rem] text-kalita-brown-dark"
            htmlFor={name}
          >
            Mensagem
          </label>

          <textarea
            {...field}
            id={name}
            name={name}
            placeholder="Conte mais sobre o que está procurando..."
            className={clsx(
              "font-nunito text-[0.875rem] text-kalita-bg-light-brown h-36 px-8 py-4 rounded-[0.25rem] border-[0.064rem] bg-kalita-bg-light outline-0 resize-none",
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
