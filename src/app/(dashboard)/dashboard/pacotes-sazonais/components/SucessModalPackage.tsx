"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { CgCheck, CgDanger } from "react-icons/cg";
import { IoClose } from "react-icons/io5";


interface SucessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SucessModalPackage({ open, onClose }: SucessModalProps) {
  
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);


  useEffect(() => {
    if (!open) return;

    if (typeof window !== "undefined") {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prev || "";
      };
    }
  }, [open]);

 

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="
              bg-white rounded-2xl shadow-2xl relative
              w-[95%] max-w-2xl px-10 py-10
              flex flex-col items-center text-center
            "
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 18 }}
          >
            <button
              onClick={onClose}
              className="cursor-pointer absolute top-6 right-6 text-kalita-brown-dark hover:text-black transition"
            >
              <IoClose size={24} />
            </button>
          
            <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center">
              <CgCheck size={48} className="text-white"/>
            </div>

            <h2 className="text-xl font-semibold mt-6 text-kalita-brown-dark">
              Seu novo pacote foi adicionado com sucesso
            </h2>

            <p className="text-kalita-bg-light-brown font-normal text-[1rem] mt-3 text-base leading-relaxed max-w-lg">
              Seu pacote já foi publicado em seu site!
            </p>

            <button

              className="
                mt-8 px-10 py-2 rounded-md bg-kalita-brown-dark text-white 
                hover:bg-neutral-900 transition font-medium cursor-pointer
              "
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
