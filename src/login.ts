import { Requests } from "@/api";
import { z } from "zod";

export const loginInputSchema = z.object({
  username: z.string().catch(""),
  password: z.string().catch(""),
});

export type TLoginInput = z.infer<typeof loginInputSchema>;

export async function login(input: TLoginInput) {
  console.log("logging in " + input.username);
  const allUsers = await Requests.getAllUsers();
  console.log("received users " + allUsers.length);
  const user = allUsers.find((user) => user.username === input.username);

  if (!user) {
    throw new Error("Invalid username");
  }

  if (user.password !== input.password) {
    throw new Error("Invalid password");
  }

  return user;
}
