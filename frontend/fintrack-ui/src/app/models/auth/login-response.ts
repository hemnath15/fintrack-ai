import { User } from './user';

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    user: User;
  };
}