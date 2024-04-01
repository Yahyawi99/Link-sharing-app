import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

interface Cookie {
  name: string;
  value: string;
}

export async function middleware(request: NextRequest) {
  const cookie: Cookie | undefined = cookies().get("access_token");

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|login|signup|icons|user).*)",
};
