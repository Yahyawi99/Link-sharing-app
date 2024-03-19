"use server";

import { object, string } from "zod";
import User from "@/models/User";
import connect from "@/db";

const loginShema = object({
  email: string().email(),
  password: string().min(8, {
    message: "Password must contain at least 8 character(s)",
  }),
});

const signupShema = object({
  username: string()
    .min(3, {
      message: "Username must contain at least 3 character(s)",
    })
    .max(10, {
      message: "Username mustn't be more than 10 character(s)",
    }),
  email: string().email(),
  password: string().min(8, {
    message: "Password must contain at least 8 character(s)",
  }),
});

interface AuthFormState {
  success?: boolean;
  errors: {
    username?: string[];
    email?: string[];
    password?: string[];
    _auth?: string[];
  };
}

// ====================Login====================
export async function login(
  formState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = loginShema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  await connect();
  const user = await User.findOne({ email: data.email });

  if (!user) {
    return {
      errors: { _auth: ["Please sign up before attempting to log in."] },
    };
  }

  // TODO : create a session

  return { errors: {}, success: true };
}

// ====================Signup====================
export async function signup() {}
