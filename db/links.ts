"use server";

import connect from ".";
import User from "@/models/User";
import Link from "@/models/Link";
import { LinkDatabase, SingleLink } from "@/interfaces/links";

export const fetchUserLinks = async (
  email: string
): Promise<SingleLink[] | undefined> => {
  try {
    await connect();

    const user = await User.findOne({ email });
    const links: LinkDatabase[] = (await Link.find({ user: user._id })) || [];

    return links.map((link) => {
      return { id: link.id, name: link.name, url: link.url };
    });
  } catch (err) {
    console.log(err);
  }
};
