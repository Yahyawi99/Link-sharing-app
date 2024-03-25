import type { UserDocument } from "@/interfaces/user";

export interface PlatformLinks {
  name: FormDataEntryValue;
  value: FormDataEntryValue;
}

export interface SingleLink {
  id: string;
  name: string;
  url: string;
}

export interface LinkDatabase {
  _id: string;
  name: string;
  url: string;
  user: UserDocument;
}
