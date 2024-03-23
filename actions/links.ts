"use server";

interface FormState {
  errors: string[];
}

export async function saveLinks(
  formState: FormState,
  formData: FormData
): Promise<FormState> {
  const platforms = Array.from(formData.entries()).filter((entrie) => {
    const [key, value] = entrie;

    if (key.startsWith("platform")) {
      return key;
    }
  });

  platforms.forEach((platform) => {
    const [key, value] = platform;

    console.log(value);

    if (!value) {
      return { errors: ["Check for invalid URLs!"] };
    }
  });
  console.log(platforms);

  return { errors: [] };
}
