import type { ContactMessage, ContactResponse } from "@/domain/contact/entities/contact-message";
import type { IContactRepository } from "@/domain/contact/interfaces/contact-repository.interface";
import type { AxiosInstance } from "axios";

export class ContactUseCase implements IContactRepository {
  private httpContactInstance: AxiosInstance;

  constructor(apiContact: AxiosInstance) {
    this.httpContactInstance = apiContact;
  }
  async sendMessage(contactData: ContactMessage): Promise<ContactResponse> {
    // No futuro: validar com Value Objects
    
    const response = this.httpContactInstance.post(
      "/service-form",
      contactData
    );
    return (await response).data;
  }
}
