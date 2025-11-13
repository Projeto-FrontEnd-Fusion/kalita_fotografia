import { useApiContactService } from "@/domain/instanceContainer"
import { useMutation } from "@tanstack/react-query"
import type {  ContactMessage } from "../entities/contact-message"
import type { AxiosError } from "axios"

export const useContactMutation = () =>{
  const contactMutation = useApiContactService
  const {mutate, isPending, isSuccess, isError } =  useMutation({
      mutationFn : (data : ContactMessage) => contactMutation.sendMessage(data),
      onSuccess : () =>{
        console.info("Meus dados Foram enviados")
      },
      onError: (err : AxiosError) =>{
          console.error("Falha ao Enviar os dados", err)
      },
      retry : 3,
      
  })

  return {
    mutate, isPending, isSuccess, isError 
  }
}