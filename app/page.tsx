import User from "@/models/User";
import connect from "@/db";
import { cookies } from "next/headers";

// async function getUsers() {
//   await connect();
//   const users = await User.find();

//   return users;
// }

export default async function Home() {
  // console.log(await getUsers());
  return <main>HOME</main>;
}
