"use server";

import connect from ".";
import User from "@/models/User";
import Link from "@/models/Link";
import { LinkDatabase } from "@/interfaces/links";

export const fetchUserLinks = async (email: string) => {
  await connect();

  try {
    const user = await User.findOne({ email });
    const links: LinkDatabase[] = (await Link.find({ user: user._id })) || [];

    return links;
  } catch (err) {
    console.log(err);
  }
};
