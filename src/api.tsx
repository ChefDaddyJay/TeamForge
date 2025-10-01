import type { Project, User } from "./types";

const baseUrl = "http://localhost:3000";

type TRequestsType = {
  getAllUsers: () => Promise<User[]>;
  postUser: (user: User) => Promise<User>;
  getAllProjects: () => Promise<Project[]>;
  postProject: (project: Project) => Promise<Project>;
};

export const Requests: TRequestsType = {
  getAllUsers: async () => {
    const response = await fetch(`${baseUrl}/users`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  },
  postUser: async (user: User) => {
    const response = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json();
  },
  getAllProjects: async () => {
    const response = await fetch(`${baseUrl}/projects`);
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return response.json();
  },
  postProject: async (project: Project) => {
    const response = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json();
  },
};
