import type { ReactNode } from "react";
import ActionButton from "./ActionButton";
import TextInput from "./TextInput";

export default function WelcomeForm({
  action,
  onSubmit,
  children,
}: {
  action: string;
  onSubmit: () => void;
  children: ReactNode;
}) {
  return (
    <div
      className="flex justify-center items-center flex-col
                     text-center shadow-lg shadow-ember 
                     rounded-2xl p-4 border-ember border
                     bg-dark text-amber-50"
    >
      <img src="/TeamForgeIcon-32x32.png" className="my-4" />
      <h1 className="mb-4 text-2xl font-bold">Welcome to TeamForge</h1>
      <form className="flex flex-col gap-3">
        {children}
        <div className="flex justify-center mt-2">
          <ActionButton to="/">Back</ActionButton>
          <ActionButton to="./" onClick={onSubmit}>
            {action}
          </ActionButton>
        </div>
      </form>
    </div>
  );
}
