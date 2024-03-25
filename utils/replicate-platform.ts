import { PlatformLinks } from "@/interfaces";

export const isPlatformsReplicated = (data: PlatformLinks[]) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].name === data[j].name) {
        return false;
      }
    }
  }
  return true;
};
