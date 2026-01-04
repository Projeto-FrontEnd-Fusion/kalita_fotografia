import type { BaseResponse } from "../contact/entities/contact-message";
import type { FeedbackSchemaType } from "./schemas/feedbackSchema";

export interface ApiFeedBackResponse extends BaseResponse {
  data : FeedbackSchemaType

}