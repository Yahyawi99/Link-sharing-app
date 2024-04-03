import { UserDocument } from "@/interfaces";

export const createToken = (user: UserDocument) => {
  return { userId: user.id, name: user.username, email: user.email };
};
