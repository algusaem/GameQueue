export interface Tag {
  id: number;
  name: string;
}

export interface Game {
  name: string;
  background_image: string | null;
  tags: Tag[];
  released: string;
  slug: string;
  platforms?: { platform: Platform }[];
  genres?: Genre[];
}
export interface RawgGame {
  id: number;
  name: string;
  released: string;
  background_image: string | null;
  rating: number;
  metacritic?: number;
  slug?: string;
  [key: string]: unknown;
}

export interface RawgPage<T> {
  count: number;
  next: string | null;
  results: T[];
}

export interface GameCardProps {
  game: Game;
}

export interface Genre {
  name: string;
}

export interface Platform {
  id: number;
  name: string;
}
