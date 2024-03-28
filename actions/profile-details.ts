"use server";

import connect from "@/db";
import User from "@/models/User";
import fs from "fs";
import path from "path";
import { object, string } from "zod";

// interface ProfileDetails {
//   avatar: File | string;
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// interface FileInput {
//   size: number;
//   type: string;
//   name: string;
// }

const mySchema = object({
  firstName: string().min(3, {
    message: "First name must contain at least 3 character(s)",
  }),
  lastName: string().min(3, {
    message: "Last name must contain at least 3 character(s)",
  }),
  email: string().email(),
});

export async function saveProfileDetails(formData: FormData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const avatar = formData.get("avatar") as File;
  const data = {
    firstName,
    lastName,
    email,
    avatar,
  };

  const validationResult = mySchema.safeParse(data);

  if (!validationResult.success) {
    console.log(validationResult.error.flatten().fieldErrors);
    return {
      errors: validationResult.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    await connect();
    const user = await User.findOne({ email: data.email });

    if (!user) {
      return {
        errors: { _auth: ["User doesn't existe"] },
      };
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    if (avatar.size > 0) {
      const bytes = await avatar.arrayBuffer();
      const fileBuffer = Buffer.from(bytes);
      const fileName = avatar.name.split(" ").join("-");

      const uploadDir = path.join(process.cwd(), "public/uploads");
      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, fileBuffer);

      user.avatar = filePath;
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: { _auth: [err.message] },
      };
    }
  }

  return { success: true };
}
