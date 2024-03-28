"use server";

import connect from "@/db";
import User from "@/models/User";
import { object, string } from "zod";

// interface FormState {
//   errors?: string[];
//   success: boolean;
// }
interface ProfileDetails {
  avatar: File | string;
  firstName: string;
  lastName: string;
  email: string;
}

interface FileInput {
  size: number;
  type: string;
  name: string;
}

const mySchema = object({
  firstName: string().min(3, {
    message: "First name must contain at least 3 character(s)",
  }),
  lastName: string().min(3, {
    message: "Last name must contain at least 3 character(s)",
  }),
  email: string().email(),
});

/*
[
  [
    'avatar',
    File {
      size: 0,
      type: 'application/octet-stream',
      name: 'undefined',
      lastModified: 1711637888750
    }
  ],
  [ 'firstName', 'Yassin' ],
  [ 'lastName', 'Yahyawi' ],
  [ 'email', 'yassin@gmail.com' ]
]

*/

export async function saveProfileDetails(formData: FormData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const avatar = formData.get("avatar") as FileInput;
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
