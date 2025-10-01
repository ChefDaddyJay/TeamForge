import type { ChangeEvent } from "react";

export default function TextInput({
  label,
  value,
  onChange,
  type = "text",
  error = false,
}: {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
  error?: boolean;
}) {
  const id = label.trim().toLowerCase();
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={id} className="text-right pr-3 w-full">
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        className={`bg-white text-indigo-950 p-2
                    rounded-lg focus:bg-teal-100 
                    ${error ? "border-2 border-ember" : ""}
                    `}
      />
    </div>
  );
}
