import { User } from "./User";

export class AuthResponse {
    statusCode!: number;
    message!: string;
    token!: string;
    refreshToken!: string;
    expirationTime!: string;
    user!: User;
  }
  