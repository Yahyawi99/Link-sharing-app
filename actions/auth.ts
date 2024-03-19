"use server";

import { object, string } from "zod";

const loginShema = object({
  email: string().email(),
  password: string().min(8),
});

interface AuthFormState {
  success?: boolean;
  errors: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
}

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

  return { errors: {} };
}

export async function signup() {}
