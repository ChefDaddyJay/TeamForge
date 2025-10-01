import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export default function AppLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link className="cursor-pointer text-link hover:text-ember" to={to}>
      {children}
    </Link>
  );
}
