import { Link } from "@tanstack/react-router";

export default function BackButton({ to }: { to: string }) {
  return (
    <Link className="action-button" to={to}>
      Back
    </Link>
  );
}
