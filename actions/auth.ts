"use server";

import connect from "@/db";
import User from "@/models/User";
import type { UserDocument } from "@/interfaces/user";
import { createToken, attachCookieToResponse } from "@/utils";
import { object, string } from "zod";
import { redirect } from "next/navigation";

const loginShema = object({
  email: string().email(),
  password: string().min(8, {
    message: "Password must contain at least 8 character(s)",
  }),
});

interface AuthFormState {
  errors: {
    username?: string[];
    email?: string[];
    password?: string[];
    _auth?: string[];
  };
  success?: boolean;
}

// ====================Login====================
export async function login(
  formState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const email = formData.get("email");
  const password = formData.get("password");
  const data = {
    email,
    password,
  };

  const result = loginShema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  await connect();
  const user: UserDocument | null = await User.findOne({ email: data.email });

  if (!user) {
    return {
      errors: { _auth: ["Please sign up before attempting to log in."] },
    };
  }

  const isPasswordCorrect =
    user.ComparePasswords && (await user.ComparePasswords(password as string));

  if (!isPasswordCorrect) {
    return {
      errors: { _auth: ["Incorrect Password."] },
    };
  }

  const token = createToken(user);
  attachCookieToResponse(token);

  redirect("/");
}

// ====================Signup====================
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

export async function signup(
  formState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = signupShema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await connect();
    const user = await User.findOne({ email: data.email });

    if (user) {
      return {
        errors: { _auth: ["Email already existe!"] },
      };
    }
    await User.create(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: { _auth: [err.message] },
      };
    }
  }

  redirect("/login");
}
