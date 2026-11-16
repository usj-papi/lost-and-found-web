export type LostObject = {
  id: string;
  name: string;
  description: string;
  location: string;
  status: LostObjectStatus;
};

export type LostObjectStatus = 'returned' | 'stored';
