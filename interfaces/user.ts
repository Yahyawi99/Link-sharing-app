export interface UserDocument extends Document {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  username: string;
  email: string;
  password: string;
}
