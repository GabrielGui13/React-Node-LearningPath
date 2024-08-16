import { ReactNode } from "react";

export interface IUser {
  id: string;
  name: string;
  email: string;
  company: string;
  unit: string;
  phone: string;
}

export interface IAuthenticateUserProps {
  email: string;
  password: string;
}

export interface IAuthContextData {
  user: IUser;
  signIn({ email, password }: IAuthenticateUserProps): void;
  signOut(): void;
}

export interface IAuthProviderProps {
  children: ReactNode;
}