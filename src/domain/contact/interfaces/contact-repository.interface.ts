import type { ContactMessage, ContactResponse } from "../entities/contact-message";

export interface IContactRepository {
  sendMessage(contactData: ContactMessage): Promise<ContactResponse>;

}