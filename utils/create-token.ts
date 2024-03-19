import { UserDocument } from "@/models/User";

export const createToken = (user: UserDocument) => {
  return { userId: user._id as string, name: user.username, email: user.email };
};
