export interface ContactMessage {
  full_name: string;
  email:string;
  phone: string;
  photo_session_type: string;
  message: string;
  assigned_photographer: null | string;
  status: 'pending' | 'read' | 'replied';
}
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface BaseResponse {
  success : boolean;
  message: string;
}

export interface ContactinDb {
  id : string;
  full_name: string;
  email:string;
  phone: string;
  photo_session_type: string;
  message: string;
  status: string;
  assigned_photographer: null | string;
  createdAt: Date | string;
  updatedAt: Date | string;

}

export interface ContactResponse extends BaseResponse {
  data : ContactinDb
}