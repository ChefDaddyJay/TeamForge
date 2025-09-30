import type { User } from "@/types";
import { createContext, useContext, type ReactNode } from "react";

type TAuthContext = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={{} as TAuthContext}>
      {children}
    </AuthContext.Provider>
  );
};
