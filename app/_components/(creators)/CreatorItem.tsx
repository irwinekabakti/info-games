import React, { FC } from "react";
import Image from "next/image";
import { CreatorItemWrapper } from "./style";
import { Creator } from "@/types/type";

interface CreatorItemProps {
  creatorItem: Creator;
}

const CreatorItem: FC<CreatorItemProps> = ({ creatorItem }) => {
  const positions = creatorItem?.positions?.map(
    (position: any): any => position?.name
  );
  const games = creatorItem?.games?.map((game: any): any => game?.name);

  return (
    <CreatorItemWrapper
      className="card"
      style={{
        background: `linear-gradient(rgba(7, 5, 27, 0.9), rgba(0, 0, 0, 0.95)), url(${creatorItem?.image_background}) center/cover no-repeat`,
      }}>
      <div className="card-top">
        <Image
          src={creatorItem?.image}
          alt="creator-img"
          width={100}
          height={150}
          quality={100}
          rel="preload"
        />
      </div>
      <div className="card-bottom text-white">
        <h4 className="card-title">{creatorItem?.name}</h4>

        <ul className="card-list-group text-white">
          <li className="list-group-item">
            <span className="item-left">Games Count: </span>
            <span className="item-right">{creatorItem?.games_count}</span>
          </li>

          <li className="list-group-item">
            <span className="item-left">Position: </span>
            <span className="item-right">
              {positions.length > 0 ? positions.join(", ") : "N/A"}
            </span>
          </li>

          <li className="list-group-item">
            <span className="item-left">Games: </span>
            <span className="item-right">
              {games.length > 0 ? games.join(", ") : "N/A"}
            </span>
          </li>
        </ul>
      </div>
    </CreatorItemWrapper>
  );
};

export default CreatorItem;
