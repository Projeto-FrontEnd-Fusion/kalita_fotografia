import { PiWarningCircleFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";


interface ConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  buttonText: string;
}

export function ConfirmModal({ isOpen, onCancel, onConfirm, buttonText }: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className=" bg-white w-[625px] py-8 px-[22px] rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button className="h-6 w-6 cursor-pointer flex justify-end">
            <IoClose color="#000" className="h-6 w-6" onClick={onCancel} />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-8">
            <PiWarningCircleFill color="red" className="w-16 h-16" />
          </div>

          <h2 className="mb-6 text-kalita-brown-dark font-nunito font-semibold">Voce tem certeza que quer enviar esse feedback?</h2>

          <button
            onClick={onConfirm}
            className="bg-kalita-brown-dark text-kalita-bg-light px-8 py-2.5 rounded-md cursor-pointer hover:bg-kalita-brown-medium"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>


  )
}