import { useAuth } from "@/providers/AuthProvider";
import NavLink from "./NavLink";

export default function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <div
      className="flex flex-col justify-between items-center gap-4
                     text-center shadow-lg shadow-ember 
                     rounded-2xl p-4 border-ember border
                     bg-dark text-amber-50
                     w-1/5 absolute left-2 top-2 bottom-2"
    >
      <div className="flex flex-col items-center gap-2 border-b pb-2">
        <img src="/TeamForgeIcon-192x192.png" />
        {user?.username}
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <NavLink text="Home" />
        <NavLink text="Tasks" />
        <NavLink text="Messages" />
      </div>
      <div className="w-full flex flex-col gap-1">
        <NavLink text="My Projects" to="../projects" active={true} />
        <NavLink text="Settings" />
        <NavLink text="Log out" onClick={logout} />
      </div>
    </div>
  );
}
