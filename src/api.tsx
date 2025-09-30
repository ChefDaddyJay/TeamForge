import type { User } from "./types";

const baseUrl = "http://localhost:3000";

type TRequestsType = {
  getAllUsers: () => Promise<User[]>;
};

export const Requests: TRequestsType = {
  getAllUsers: async () => {
    const response = await fetch(`${baseUrl}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  },
};
