import type { User } from "@/types";
import { createContext, useContext, useState, type ReactNode } from "react";

type TAuthContext = {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: (user: User) => setUser(user),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
