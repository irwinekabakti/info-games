import React, { FC } from "react";
import GameItem from "./GameItem";
import { GameListWrapper } from "./style";
import { GameData } from "@/types/type";

interface GameListProps {
  games: GameData[];
  sliceValue?: number;
}

const GameList: FC<GameListProps> = ({ games, sliceValue = games.length }) => {
  return (
    <GameListWrapper>
      <div className="card-list">
        {games?.slice(0, sliceValue).map((item) => (
          <GameItem key={item.id} gameItem={item} />
        ))}
      </div>
    </GameListWrapper>
  );
};

export default GameList;
