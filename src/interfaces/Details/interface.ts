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

export interface StoreProps {
  id: number;
  url: string;
  store_id: number;
  game_id: number;
}

export interface StoreDataItem {
  id: number;
  url: string;
  store: {
    id: number;
    name: string;
    slug: string;
    domain: string;
  };
}

export interface StoresProps {
  slug: string;
  storeData: StoreDataItem[];
}

export type BodyProps = {
  slug: string;
  description_raw: string;
  tags: Tag[];
  stores: {
    id: number;
    url: string;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
    };
  }[];
};
