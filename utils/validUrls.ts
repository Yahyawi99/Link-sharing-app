import { PlatformLinks } from "@/interfaces";

const UrlRegex: RegExp =
  /\b(?:https?|ftp|file):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/;

export function isUrlValid(data: PlatformLinks[]) {
  let allUrlsValid = true;

  data.forEach((platform) => {
    if (!platform.value || !UrlRegex.test(platform.value as string)) {
      allUrlsValid = false;
    }
  });

  return allUrlsValid;
}
