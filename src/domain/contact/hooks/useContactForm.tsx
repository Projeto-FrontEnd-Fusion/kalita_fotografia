import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactSchema, ContactSchemaType } from "@/domain/contact/schemas/contactSchema";

export const useContactForm = (schema: typeof ContactSchema) => {
  const { 
    register, 
    handleSubmit, 
    control,
    reset,
    formState: { errors } 
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(schema),
  });

  return { 
    register, 
    handleSubmit, 
    control,
    reset,
    errors
  };
};