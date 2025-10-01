import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type ChangeEvent } from "react";
import toast from "react-hot-toast";
import { login, type TLoginInput } from "../../auth";
import TextInput from "@/components/TextInput";
import WelcomeForm from "@/components/WelcomeForm";
import { useAuth } from "@/providers/AuthProvider";
import type { User } from "@/types";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [input, setInput] = useState<TLoginInput>({} as TLoginInput);
  const { username, password } = input;
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = { ...input };
    newInput[e.target.id as keyof TLoginInput] = e.target.value;
    setInput(newInput);
  };

  const handleLogin = () => {
    login(input)
      .then((user) => {
        setUser(user);
        toast.success("Login successful! Welcome " + (user as User).username);
        navigate({ to: `/dashboard/${user.username}/projects` });
      })
      .catch((e) => toast.error("Error: " + e.message));
  };

  return (
    <WelcomeForm action="Login" onSubmit={handleLogin}>
      <TextInput label="Username" value={username} onChange={handleChange} />
      <TextInput
        label="Password"
        value={password}
        onChange={handleChange}
        type="password"
      />
    </WelcomeForm>
  );
}
