export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Date;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: number;
  errors?: any;
}