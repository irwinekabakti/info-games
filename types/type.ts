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
