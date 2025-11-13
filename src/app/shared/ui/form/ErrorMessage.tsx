import { VscError } from "react-icons/vsc";
import { IErrorMessage } from "./types/ErrorMessage";


export default function ErrorMessage({ message }: IErrorMessage) {
  if (!message) return null;

  return (
    <div className="flex items-center w-full h-5 gap-2">
      <VscError color="#FF0000" />
      <span className="font-nunito text-[0.875rem] text-gray-400 font-normal leading-[1.5]">
        {message}
      </span>
    </div>
  );
}
