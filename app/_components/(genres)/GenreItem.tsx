"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsStar } from "react-icons/bs";
import { apiURL } from "@/constant";
import { API_KEY } from "@/api/api_key";
import axios from "@/api/axios";
import StarRating from "../StarRating/StarRating";
import { GenreItemWrapper } from "./style";
import { GameData } from "@/types/type";

interface GameItem {
  id: number;
}

interface GenreItemProps {
  gameItem: GameItem;
}

const GenreItem: FC<GenreItemProps> = ({ gameItem }) => {
  const [gameData, setGameData] = useState<GameData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${apiURL.gamesURL}/${gameItem.id}?${API_KEY}`
      );
      setGameData(data);
    };

    fetchData();
  }, []);

  return (
    <GenreItemWrapper className="card">
      <div className="card-top img-fit-cover">
        <Image
          src={gameData?.background_image || "/assets/broken-image.png"}
          alt={gameData?.name ?? "test-name"}
          quality={100}
          width={100}
          height={100}
          rel="preload"
        />
        <StarRating rating={gameData?.rating ?? 0} />
        <div className="ratings-count">
          {gameData?.ratings_count} <BsStar className="ms-1" size={12} />{" "}
        </div>
      </div>
      <div className="card-bottom">
        <h4 className="text-white text-uppercase card-title">
          {gameData?.name}
        </h4>
        <p className="para-text">
          Minecraft Legends, a real-time strategy action ...{" "}
        </p>

        <div className="block-wrap">
          <div className="details-group">
            <div className="details-item d-flex align-items-center">
              <p className="details-item-name fw-6">Release Date:&nbsp;</p>
              <p className="details-item-value">{gameData?.released}</p>
            </div>
            <div className="details-item d-flex align-items-center">
              <p className="details-item-name fw-6">Updated:&nbsp;</p>
              <p className="details-item-value">{gameData?.updated}</p>
            </div>
          </div>
          <Link
            href={`/games/${gameData?.id}`}
            className="card-button text-uppercase mt-3">
            see more
          </Link>
        </div>
      </div>
    </GenreItemWrapper>
  );
};

export default GenreItem;
