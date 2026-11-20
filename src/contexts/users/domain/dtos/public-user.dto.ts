export type PublicUserDTO = {
  id: string;
  username: string;
  name: string;
  email: string;
  role: 'visitor' | 'admin';
  created_at: string;
};
