"use client";

import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { X, FileImage } from "lucide-react";

interface FileData {
  name: string;
  base64: string;
}

interface DropzoneProps {
  onFilesChange: (files: string[]) => void; 
  initialFiles?: string[];
}

export default function DropzonePackage({ onFilesChange, initialFiles }: DropzoneProps) {

  const [files, setFiles] = useState<FileData[]>([]);

  useEffect(() => {
    if (initialFiles && initialFiles.length > 0 && files.length === 0) {
      const formatted = initialFiles.map((b64, index) => ({
        name: `Foto_${index + 1}.jpg`,
        base64: b64
      }));
      setFiles(formatted);
    }
  }, [initialFiles]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const filesToProcess = acceptedFiles.slice(0, 2);
    const processedFiles: FileData[] = [];

    filesToProcess.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        processedFiles.push({ name: file.name, base64: base64String });

        if (processedFiles.length === filesToProcess.length) {
          setFiles(processedFiles);
          onFilesChange(processedFiles.map(f => f.base64));
        }
      };
      reader.readAsDataURL(file);
    });
  }, [onFilesChange]);

  const removeFile = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFilesChange(updated.map(f => f.base64));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    maxFiles: 2,
  });

  return (
    <div
      {...getRootProps()}
      className="w-full flex flex-col items-center justify-center border-2 border-dashed bg-kalita-bg-light border-stone-200 rounded-md p-6 transition-all text-center cursor-pointer min-h-[180px] hover:border-kalita-brown-medium"
    >
      <input {...getInputProps()} />
      
      {files.length === 0 ? (
        <div className="font-nunito text-sm text-stone-600 leading-relaxed px-4">
          <p className="font-nunito font-normal text-lg text-kalita-brown-medium leading-normal">
            Arraste os seus arquivos (máx 2)
          </p>
          <p className="font-nunito font-normal text-lg text-kalita-brown-medium leading-normal">
            aqui ou busque diretamente em
          </p>
          <p className="font-nunito font-normal text-lg text-kalita-brown-medium leading-normal">
            seu <span className="font-nunito text-lg leading-normal text-kalita-brown-dark font-bold underline">navegador</span>
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3">
          <p className="text-xs font-bold text-kalita-brown-dark/50 uppercase tracking-wider mb-2">Arquivos selecionados:</p>
          {files.map((file, index) => (
            <div 
              key={index} 
              className="relative flex items-center w-full bg-white border border-stone-200 rounded-lg px-4 py-3 shadow-sm"
            >
              <FileImage className="text-kalita-brown-medium mr-3" size={20} />
              <span className="font-nunito text-sm text-kalita-brown-dark truncate pr-8">
                {file.name}
              </span>
              
              <button
                type="button"
                onClick={(e) => removeFile(e, index)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-red-50 text-stone-400 hover:text-red-500 rounded-full transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          ))}
          <p className="text-[10px] text-stone-400 mt-2 italic">Clique ou arraste novos arquivos para substituir</p>
        </div>
      )}
    </div>
  );
}