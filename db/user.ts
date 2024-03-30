"use server";

import connect from ".";
import User from "@/models/User";
import { UserDocument } from "@/interfaces";

export const fetchUser = async (userEmail: string) => {
  try {
    await connect();
    const user = (await User.findOne({ email: userEmail })) as UserDocument;

    const { id, firstName, lastName, username, avatar, email } = user;
    return { id, firstName, lastName, username, avatar, email };
  } catch (err) {
    console.log(err);
  }
};
