import { StaticImageData } from "next/image";

export interface GameData {
  id: number;
  background_image: StaticImageData;
  name: string;
  rating: number;
  ratings_count: number;
  released: string;
  updated: string;
}

export interface StoreGameData extends Pick<GameData, "id" | "name"> {
  slug: string;
  image_background: StaticImageData | any;
  games_count: number;
}

export interface CreatorGameData extends Pick<GameData, "id" | "name"> {
  slug: string;
  // image_background: StaticImageData | any;
  // games_count: number;
  added: string;
}

export interface Store {
  id: number;
  image_background: StaticImageData | any;
  name: string;
  domain: string;
  games_count: number;
  description: string;
  slug: string;
  games: StoreGameData[];
}

export interface CreatorBase {
  id: number;
  name: string;
  image: StaticImageData | any;
  image_background: StaticImageData | any;
  games_count: number;
  slug: string;
}

export interface Position {
  id: number;
  name: string;
  slug: string;
}

export interface Creator extends CreatorBase {
  games: CreatorGameData[];
  positions: Position[];
}
