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

export interface StoreGameData extends Pick<GameData, "id" | "name"> {}

export interface Store {
  id: number;
  image_background: StaticImageData;
  name: string;
  domain: string;
  games_count: number;
  games: StoreGameData[];
}

/*
export interface GameProps {
  id: number;
  background_image: StaticImageData;
  name: string;
  rating: number;
  ratings_count: number;
  released: string;
  updated: string;
}
*/
