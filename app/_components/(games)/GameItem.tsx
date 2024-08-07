import React, { FC } from "react";
import Link from "next/link";
import StarRating from "../StarRating/StarRating";
import { BsStar } from "react-icons/bs";
import { GameItemWrapper } from "./style";
import Image from "next/image";
import { GameData } from "@/types/type";

interface GameItemProps {
  gameItem: GameData;
}
const GameItem: FC<GameItemProps> = ({ gameItem }) => {
  return (
    <GameItemWrapper className="card">
      <div className="card-top img-fit-cover">
        <Image
          src={gameItem?.background_image}
          alt={gameItem?.name}
          width={100}
          height={100}
          quality={100}
          rel="preload"
        />
        <StarRating rating={gameItem?.rating} />
        <div className="ratings-count">
          {gameItem?.ratings_count} <BsStar className="ms-1" size={12} />{" "}
        </div>
      </div>
      <div className="card-bottom">
        <h4 className="text-white text-uppercase card-title">
          {gameItem?.name}
        </h4>
        <p className="para-text">
          Minecraft Legends, a real-time strategy action ...{" "}
        </p>

        <div className="block-wrap d-flex align-items-end justify-content-between">
          <div className="details-group">
            <div className="details-item d-flex align-items-center">
              <p className="details-item-name fw-6">Release Date:&nbsp;</p>
              <p className="details-item-value">{gameItem?.released}</p>
            </div>
            <div className="details-item d-flex align-items-center">
              <p className="details-item-name fw-6">Updated:&nbsp;</p>
              <p className="details-item-value">{gameItem?.updated}</p>
            </div>
          </div>
          <Link
            href={`/games/${gameItem?.id}`}
            className="card-button text-uppercase">
            see more
          </Link>
        </div>
      </div>
    </GameItemWrapper>
  );
};

export default GameItem;
