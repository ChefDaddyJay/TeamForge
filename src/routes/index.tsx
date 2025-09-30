import { createFileRoute, Outlet } from "@tanstack/react-router";
import "../App.css";
import { AuthProvider } from "@/providers/AuthProvider";
import Welcome from "@/components/Welcome";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <AuthProvider>
      <Outlet />
      <Welcome />
    </AuthProvider>
  );
}
