import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import "../../css/page.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import { login, type TLoginInput } from "../../auth";
import BackButton from "@/components/BackButton";

export const Route = createFileRoute("/login/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [input, setInput] = useState<TLoginInput>({} as TLoginInput);
  const navigate = useNavigate({ from: "/login" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(input)
      .then((user) => {
        navigate({ to: `/dashboard/${user.username}` });
      })
      .catch((e) => toast.error("Error: " + e.message));
  };

  return (
    <div className="page-form">
      <h1>Welcome to TeamForge</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Username</span>
          <input
            type="text"
            id="username"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInput({
                ...input,
                username: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <input
            type="password"
            id="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInput({
                ...input,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="buttons">
          <BackButton to="/" />
          <button type="submit" className="action-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
