import { createFileRoute, useNavigate } from "@tanstack/react-router";
import "../../css/page.css";
import BackButton from "@/components/BackButton";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import { signup, type TSignupInput } from "@/auth";

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
    <div className="app-page">
      <div className="page-form">
        <h1>Welcome to TeamForge!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Username</span>
            <input
              type="text"
              id="username"
              onChange={handleChange}
              value={username}
            />
          </div>
          <div>
            <span>Password</span>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div>
            <span>Confirm Password</span>
            <input
              type="password"
              id="confirm"
              onChange={handleChange}
              value={confirm}
              className={password !== confirm ? "error" : ""}
            />
          </div>
          <div className="buttons">
            <BackButton to="/" />
            <button type="submit" className="action-button">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
