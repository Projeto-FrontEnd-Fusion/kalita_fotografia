"use client";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { GoChevronDown } from "react-icons/go";
import { CustomSelectProps } from "./types/CustomSelect";
import clsx from "clsx";
import ErrorMessage from "./ErrorMessage";

export default function CustomSelect({ name, control, errors }: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  const options = [
    "Gestar",
    "Nascimentos",
    "Primeiros Dias",
    "Acompanhamento trimestral do bebê",
    "Festinhas",
    "Ensaio de família",
    "Datas comemorativas (dia das mães ou natal)"
  ];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const selected = field.value || "";

        return (
          <div className="flex flex-col gap-2 w-full h-full">
            <span className='font-nunito font-semibold leading-[1.5] text-[1rem] text-kalita-brown-dark'>
              Qual sessão de interesse?
            </span>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={clsx("w-full py-4 px-8 bg-kalita-bg-light border border-kalita-bg-light-brown rounded-md font-nunito text-kalita-bg-light-brown text-left flex justify-between items-center",
                {
                  "border-kalita-error": errors[name],
                  "border-kalita-bg-light-brown": !errors[name],
                }
              )}

            >
              {selected === "" ? (
                <span className="font-nunito text-kalita-bg-light-brown text-[0.875rem]">Selecionar</span>
              ) : (
                <span className="text-kalita-brown-dark">{selected}</span>
              )}

              {open === false ? (
                <span className="text-2xl text-kalita-brown-dark">
                  <GoChevronDown />
                </span>
              ) : (
                <span className="text-2xl text-kalita-brown-dark rotate-180">
                  <GoChevronDown />
                </span>
              )}
            </button>

            <ErrorMessage message={errors?.[name]?.message} />

            {open && (
              <div className="mt-2">
                <ul className="w-full">
                  {options.map((opt) => (
                    <li
                      key={opt}
                      onClick={() => {
                        field.onChange(opt);
                        setOpen(false);
                      }}
                      className="font-nunito font-normal text-[0.875rem]
                        text-kalita-bg-light-brown w-full h-16 py-4 px-8
                        bg-kalita-bg-light border-b-[0.063rem] border-b-kalita-bg-light-brown
                        cursor-pointer"
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      }}
    />
  );
}
