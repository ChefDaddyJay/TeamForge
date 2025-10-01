import Sidebar from "@/components/Sidebar";
import { useAuth } from "@/providers/AuthProvider";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useAuth();

  if (!user) {
    const navigate = useNavigate({ from: "/" });
    navigate({ to: "/login" });
  }

  return (
    user && (
      <>
        <Sidebar />
        <div
          className="flex flex-col items-center gap-4
                     text-center shadow-lg shadow-ember  
                     rounded-2xl p-4 border-ember border
                     bg-dark text-amber-50
                     w-9/12 absolute right-2 top-2 bottom-2"
        >
          <Outlet />
        </div>
      </>
    )
  );
}
