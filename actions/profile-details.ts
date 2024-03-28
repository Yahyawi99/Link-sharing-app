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

  avatar: union([
    string(),
    object({
      size: number(),
      type: string(),
      name: string(),
      value: string(),
    }).refine((value) => {
      if (typeof value.name === "undefined") {
        return false;
      }
    }),
  ]),
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
  console.log(Array.from(formData.entries()));
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

  console.log(validationResult);

  //  for (let i = 0; i < platformsAndUrls.length; i++) {
  //    data.push({
  //      name: platformsAndUrls[i][1],
  //      value: platformsAndUrls[i + 1][1],
  //    });
  //    i++;
  //  }

  return { success: true };
}
