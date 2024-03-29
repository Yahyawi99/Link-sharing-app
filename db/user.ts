"use server";

import connect from ".";
import User from "@/models/User";
import { UserDocument } from "@/interfaces";

export const fetchUser = async (
  email: string
): Promise<UserDocument | undefined> => {
  try {
    await connect();
    const user = (await User.findOne({ email })) as UserDocument;
    return user;
  } catch (err) {
    console.log(err);
  }
};
