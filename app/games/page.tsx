"use client";

import React, { FC, useEffect, useState } from "react";
import Layout from "../_components/(shared)/Layout";
import { GameAllPageWrapper } from "./style";
import GameList from "../_components/(games)/GameList";
import Title from "../_components/Title/Title";
import Preloader from "../_components/(shared)/Preloader/Preloader";
import { STATUS } from "@/utils/status";
import { fetchAsyncGames } from "@/store/asyncThunk/game-asyncThunk";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectAllGames,
  selectAllGamesStatus,
  selectGamesNextPage,
  selectGamesPrevPage,
} from "@/store/action/game-slice";
import Pagination from "../_components/Pagination/Pagination";

const page: FC = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector(selectAllGames);
  const gamesStatus = useAppSelector(selectAllGamesStatus);
  const nextPage = useAppSelector(selectGamesNextPage);
  const prevPage = useAppSelector(selectGamesPrevPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncGames(page));
  }, [page]);

  // const pageHandler = (pageValue: any) => setPage(pageValue);
  const pageHandler = (pageValue: number) => setPage(pageValue);

  return (
    <Layout>
      <GameAllPageWrapper>
        <div className="sc-games section">
          <div className="container">
            <Title titleName={{ firstText: "all", secondText: "games" }} />
            {gamesStatus === STATUS.LOADING ? (
              <Preloader />
            ) : games?.length > 0 ? (
              <>
                <GameList games={games} />
                <Pagination
                  pageHandler={pageHandler}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  currentPage={page}
                />
              </>
            ) : (
              "No games found!"
            )}
          </div>
        </div>
      </GameAllPageWrapper>
    </Layout>
  );
};

export default page;
