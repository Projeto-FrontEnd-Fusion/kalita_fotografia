import { useForm } from "react-hook-form";
import { FeedbackSchema, FeedbackSchemaType } from "../schemas/feedbackSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useFeedbackForm = (schema: typeof FeedbackSchema) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    clearErrors,
    formState: { errors }
  } = useForm<FeedbackSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      sessionType: "",
      testimonial: "",
      authorizedToPostFeedback: false
    }
  });

  return {
    register,
    handleSubmit,
    control,
    reset,
    errors,
    clearErrors
  };
};