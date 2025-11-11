import { motion, AnimatePresence } from "framer-motion";
import { ModalProps } from "../types/Modal";

export function Modal({ isOpen, onClose, title, message }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-kalita-bg-light rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] 
                       w-[90%] max-w-md p-8 text-center border border-kalita-bg-light-brown"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-antonio text-kalita-brown-dark text-2xl mb-4 tracking-wide">
              {title}
            </h2>

            <p className="font-nunito text-kalita-bg-light-brown text-base mb-8 leading-relaxed">
              {message}
            </p>

            <button
              onClick={onClose}
              className="bg-kalita-brown-medium text-kalita-bg-light font-nunito 
                         font-semibold py-3 px-8 rounded-md shadow-md
                         hover:bg-kalita-brown-dark transition-colors duration-200"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
