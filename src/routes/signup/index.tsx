import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import { signup, type TSignupInput } from "@/auth";
import ActionButton from "@/components/ActionButton";
import TextInput from "@/components/TextInput";

export const Route = createFileRoute("/signup/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [input, setInput] = useState<TSignupInput>({} as TSignupInput);
  const { username, password, confirm } = input;
  const navigate = useNavigate({ from: "/signup" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newInput = {
      ...input,
      [id]: value,
    };
    setInput(newInput);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirm) {
      toast.error("Please confirm password");
    } else {
      signup(input)
        .then((user) => {
          navigate({ to: `/dashboard/${user.username}` });
        })
        .catch((e) => toast.error("Error: " + e.message));
    }
  };

  return (
    <div
      className="flex justify-center items-center 
                 text-center shadow-lg shadow-ember rounded-2xl p-4
                 border-ember border"
    >
      <div className="bg-dark text-amber-50 flex flex-col items-center">
        <img src="/TeamForgeIcon-32x32.png" />
        <h1 className="text-2xl font-bold m-2 mb-8">Welcome to TeamForge!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <TextInput
            label="Username"
            value={username}
            onChange={handleChange}
          />
          <TextInput
            label="Password"
            value={password}
            onChange={handleChange}
          />
          <TextInput
            label="Confirm Password"
            value={confirm}
            onChange={handleChange}
            type="password"
          />
          <div className="my-4">
            <ActionButton to="/">Back</ActionButton>
            <ActionButton to="">Sign up</ActionButton>
          </div>
        </form>
      </div>
    </div>
  );
}
