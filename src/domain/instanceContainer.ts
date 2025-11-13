import { ApiInstance } from "./apiInstance";
import { ContactUseCase } from "./contact/use-cases/contact-use-case";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string
const useContactInstance = ApiInstance.getInstance(API_URL)
export const useApiContactService = new ContactUseCase(useContactInstance)
