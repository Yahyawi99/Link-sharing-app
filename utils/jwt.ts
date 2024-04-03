import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

interface TokenType {
  userId?: string;
  name?: string;
  email?: string;
}

export const createJWT = (token: TokenType) =>
  jwt.sign(token, process.env.JWT_SECRET || "");

export const attachCookieToResponse = (tokenUser: TokenType) => {
  const token = createJWT(tokenUser);

  const oneDay = 24 * 3600 * 1000;

  cookies().set("access_token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};
