import { Link } from "@tanstack/react-router";

export default function NavLink({
  text,
  to = "",
  onClick = () => {},
  active = false,
}: {
  text: string;
  to?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <div
      className={`w-full h-10 cursor-pointer rounded-xl
                    flex items-center justify-center
                    text-xl 
                    ${active && "border text-link"}
                    hover:shadow shadow-ember
      `}
    >
      <Link to={to} onClick={onClick}>
        {text}
      </Link>
    </div>
  );
}
