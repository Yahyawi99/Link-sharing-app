import { PlatformLinks } from "@/interfaces";

export function isUrlValid(data: PlatformLinks[]) {
  let allUrlsValid = true;

  data.forEach((platform) => {
    if (!platform.value) {
      allUrlsValid = false;
    }
  });

  return allUrlsValid;
}
