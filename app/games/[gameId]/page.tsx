"use client";

import React, { FC, useEffect } from "react";
import { useParams } from "next/navigation";
import Layout from "@/app/_components/(shared)/Layout";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectSingleGame,
  selectSingleGameStatus,
} from "@/store/action/game-slice";
import { fetchAsyncGameDetails } from "@/store/asyncThunk/game-asyncThunk";
import { GameDetailsPageWrapper } from "./style";
import { game_details_image } from "@/utils/images";
import Preloader from "@/app/_components/(shared)/Preloader/Preloader";
import BreadCrumb from "@/app/_components/BreadCrumb/BreadCrumb";
import GameDetails from "@/app/_components/(games)/GameDetails";
import { STATUS } from "@/utils/status";

const page: FC = () => {
  const params = useParams();
  const gameId = params.gameId as string;

  const dispatch = useAppDispatch();
  const singleGameData = useAppSelector(selectSingleGame);
  const singleGameStatus = useAppSelector(selectSingleGameStatus);

  useEffect(() => {
    if (gameId) {
      dispatch(fetchAsyncGameDetails(gameId));
    }
  }, [gameId, dispatch]);

  const gameNameById: Record<string, string> = {
    [singleGameData.id]: singleGameData.name,
  };

  return (
    <Layout>
      <GameDetailsPageWrapper>
        <div
          className="sc-details"
          style={{
            background: `linear-gradient(0deg, rgba(16, 14, 43, 0.8), rgba(16, 14, 43, 0.8)), url(${game_details_image.src}) center/cover no-repeat`,
          }}>
          <div className="container">
            <BreadCrumb dataNameById={gameNameById} />
            {singleGameStatus === STATUS.LOADING ? (
              <Preloader />
            ) : (
              <GameDetails gameData={singleGameData} />
            )}
          </div>
        </div>
      </GameDetailsPageWrapper>
    </Layout>
  );
};

export default page;
