"use server";

import { PlatformLinks } from "@/interfaces";
import { isUrlValid, isPlatformsReplicated } from "@/utils";
import connect from "@/db";
import User from "@/models/User";
import Link from "@/models/Link";

interface FormState {
  errors?: string[];
  success: boolean;
}

export async function saveLinks(
  userEmail: string,
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const platformsAndUrls = Array.from(formData.entries()).filter((entrie) => {
    const [key, _] = entrie;

    if (key.startsWith("platform") || key.startsWith("url")) {
      return key;
    }
  });

  const data: PlatformLinks[] = [];

  for (let i = 0; i < platformsAndUrls.length; i++) {
    data.push({
      name: platformsAndUrls[i][1],
      value: platformsAndUrls[i + 1][1],
    });
    i++;
  }

  if (data.length && !isPlatformsReplicated(data)) {
    return { errors: ["You cannot have duplicate platforms!"], success: false };
  }

  if (data.length && !isUrlValid(data)) {
    return { errors: ["Please check for invalid URLs !"], success: false };
  }

  await connect();
  const user = await User.findOne({ email: userEmail });

  await Link.deleteMany({ user: user._id });

  data.forEach(async (platform) => {
    const { name, value } = platform;
    const linkData = {
      name,
      url: value,
      user: user._id,
    };

    await Link.create(linkData);
  });

  return { success: true };
}
