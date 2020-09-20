export type RecordsResponse = {
  content: RecordItem[];
  totalPages: number;
};

export type RecordItem = {
  id: number;
  moment: string;
  name: string;
  age: number;
  gameTitle: string;
  platform: Platform;
  genreTitle: string;
};

export type Platform = "XBOX" | "PC" | "PLAYSTATION";
