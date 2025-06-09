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
