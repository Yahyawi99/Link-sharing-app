import { Document } from "mongoose";

export interface UserDocument {
  id: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  username?: string;
  email?: string;
  password?: string;
  ComparePasswords: (inputPassword: string) => boolean;
}
