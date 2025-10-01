import { Link } from "@tanstack/react-router";
import AppLink from "./AppLink";

export default function Welcome() {
  return (
    <div
      className="min-h-[100vh] flex flex-col items-center 
                    justify-center text-3xl bg-indigo-950
                    text-amber-100 font-bold"
    >
      <img src="/TeamForgeIcon-192x192.png" />
      <h1 className="text-6xl my-4">TeamForge</h1>
      <AppLink to="/login">Login</AppLink>
      or
      <AppLink to="/signup">Sign up</AppLink>
    </div>
  );
}
