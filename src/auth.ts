import { Requests } from "@/api";
import { z } from "zod";

export const loginInputSchema = z.object({
  username: z.string().catch(""),
  password: z.string().catch(""),
});

export const signupSchema = z.object({
  username: z.string().catch(""),
  password: z.string().catch(""),
  confirm: z.string().catch(""),
});

export type TLoginInput = z.infer<typeof loginInputSchema>;

export type TSignupInput = z.infer<typeof signupSchema>;

export async function login(input: TLoginInput) {
  const allUsers = await Requests.getAllUsers();
  const user = allUsers.find((user) => user.username === input.username);

  if (!user) {
    throw new Error("Invalid username");
  }

  if (user.password !== input.password) {
    throw new Error("Invalid password");
  }

  return user;
}

export async function signup(input: TSignupInput) {
  const { username, password } = input;
  const user = await Requests.postUser({ username, password });
  if (!user) {
    throw new Error("Failed to create user");
  }

  return user;
}
