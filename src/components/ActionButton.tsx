import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export default function ActionButton({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      className="m-4 text-amber-50 border border-link
                shadow-md shadow-link p-2 rounded-xl
                hover:shadow-ember hover:border-ember"
      to={to}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
