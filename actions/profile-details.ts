"use server";

import { number, object, string, union } from "zod";

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
  const avatar = formData.get("avatar");

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

  console.log("success");

  return { success: true };
}
