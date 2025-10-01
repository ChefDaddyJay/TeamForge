export type User = {
  username: string;
  password: string;
};

export type Project = {
  id: string;
  name: string;
  members: User[];
  leads: User[];
  owner: User;
};
