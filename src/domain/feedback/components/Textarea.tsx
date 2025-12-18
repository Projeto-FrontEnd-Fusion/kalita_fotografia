"use client";
import React from "react";
import { Controller } from "react-hook-form";
import ErrorMessage from "@/app/shared/ui/form/ErrorMessage";
import clsx from "clsx";
import { TextAreaProps } from "../types/Textarea";


export function Textarea({ name, nameInput, namePlaceholderInput, control, errors }: TextAreaProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col gap-2 w-full h-48">
          <label
            className="font-nunito font-semibold leading-normal text-[1rem] text-kalita-brown-dark"
            htmlFor={name}
          >
            {nameInput}
          </label>

          <textarea
            {...field}
            id={name}
            name={name}
            placeholder={namePlaceholderInput}
            className={clsx(
              "font-nunito text-[0.875rem] text-kalita-bg-light-brown h-36 px-8 py-4 rounded-sm border-[0.064rem] bg-kalita-bg-light outline-0 resize-none",
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
