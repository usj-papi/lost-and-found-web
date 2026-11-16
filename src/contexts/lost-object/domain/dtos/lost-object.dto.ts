export type LostObjectDTO = {
  id: string;
  name: string;
  description: string;
  location: string;
  status: LostObjectStatusDTO;
};

export type LostObjectStatusDTO = 'returned' | 'stored';
