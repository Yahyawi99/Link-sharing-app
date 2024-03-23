"use server";

import { PlatformLinks } from "@/interfaces";
import { isUrlValid } from "@/utils/validUrls";
import connect from "@/db";
import User from "@/models/User";

interface FormState {
  errors: string[];
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

  if (!isUrlValid(data)) {
    return { errors: ["Check for invalid URLs !"] };
  }

  await connect();
  console.log(userEmail);
  const user = await User.findOne({ email: userEmail });
  console.log(user);

  return { errors: [] };
}
