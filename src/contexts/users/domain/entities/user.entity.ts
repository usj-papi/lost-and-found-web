export type User = {
  id: string;
  username: string;
  name?: string;
  email?: string;
  role: UserRole;
  createdAt?: Date;
};

export type UserRole = 'visitor' | 'admin';
