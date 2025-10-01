import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanstackDevtools } from "@tanstack/react-devtools";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/providers/AuthProvider";

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 
                      flex justify-center items-center 
                      text-center bg-dark"
        >
          <Outlet />
        </div>
        <Toaster />
        <TanstackDevtools
          config={{
            position: "bottom-left",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </>
    </AuthProvider>
  ),
});
