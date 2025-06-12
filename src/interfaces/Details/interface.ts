import { Genre } from "../Content/interface";

export interface HeaderProps {
  data: {
    genres: Genre[];
    name: string;
    developers: { name: string }[];
    publishers: { name: string }[];
    released?: string;
  };
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}
