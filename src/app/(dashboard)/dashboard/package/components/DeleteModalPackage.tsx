import { AnimatePresence, motion } from "framer-motion";
import { CgDanger } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void; 
}

export default function DeleteModalPackage({ open, onClose, onConfirm }: DeleteModalProps) {

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <motion.div className="bg-white rounded-2xl shadow-2xl relative w-[95%] max-w-2xl px-10 py-10 flex flex-col items-center text-center">
            
            <button onClick={onClose} className="cursor-pointer absolute top-6 right-6 text-kalita-brown-dark hover:text-black transition">
              <IoClose size={24} />
            </button>
          
            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
              <CgDanger size={48} className="text-white" style={{ transform: "rotate(180deg)" }} />
            </div>

            <h2 className="text-xl font-semibold mt-6 text-kalita-brown-dark">
              Deseja excluir este pacote?
            </h2>

            <p className="text-stone-500 font-normal mt-3 text-base leading-relaxed max-w-lg">
              Com esta ação o pacote selecionado será apagado de seu portfólio. 
              Mas não se preocupe, poderá criar um novo!
            </p>

            <button
              onClick={onConfirm} // AGORA O BOTÃO REALMENTE DELETA!
              className="mt-8 px-10 py-2 rounded-md bg-kalita-brown-dark text-white hover:bg-neutral-900 transition font-medium cursor-pointer"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}