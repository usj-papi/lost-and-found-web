export type CreateUserDTO = {
  username: string;
  password: string;
  name: string;
  email: string;
  role?: 'visitor' | 'admin';
};
