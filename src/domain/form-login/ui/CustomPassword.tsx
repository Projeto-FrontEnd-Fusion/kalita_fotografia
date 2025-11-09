"use client";

import ErrorMessage from "./ErrorMessage";
import clsx from "clsx";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CustomPasswordProps } from "../types/CustomPassword";

export default function CustomPassword({
  name,
  control,
  errors,
  nameInput,
  nameLabelInput,
  namePlaceholderInput,
}: CustomPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <div className="flex flex-col gap-2.5 w-full h-24">
          <label htmlFor={nameLabelInput}>
            <span className="font-nunito font-semibold leading-[1.5] text-[1rem] text-kalita-brown-dark">
              {nameInput}
            </span>
          </label>

          <div className="relative">
            <input
              {...field}
              id={nameLabelInput}
              name={nameLabelInput}
              type={showPassword ? "text" : "password"}
              placeholder={namePlaceholderInput}
              className={clsx(
                "w-full py-4 px-8 pr-10 bg-kalita-bg-light border-[0.063rem] rounded-[0.25rem] font-nunito text-kalita-bg-light-brown text-[0.875rem] outline-0",
                {
                  "border-kalita-error": errors?.[name],
                  "border-kalita-bg-light-brown": !errors?.[name],
                }
              )}
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-10 cursor-pointer top-1/2 -translate-y-1/2 text-kalita-bg-light-brown hover:text-kalita-brown-dark transition"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <ErrorMessage message={errors?.[name]?.message as string} />
        </div>
      )}
    />
  );
}
