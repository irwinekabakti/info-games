"use client";
import React, { FC, useEffect } from "react";
import Link from "next/link";
import Banner from "../_components/Banner/Banner";
import ImageSlider from "../_components/ImageSlider/ImageSlider";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectAllGames,
  selectAllGamesStatus,
} from "@/store/action/game-slice";
import { selectAllGenres } from "@/store/action/genre-slice";
import {
  selectAllStores,
  selectAllStoresStatus,
} from "@/store/action/store-slice";
import { fetchAsyncGenres } from "@/store/asyncThunk/genre-asynvThunk";
import { fetchAsyncGames } from "@/store/asyncThunk/game-asyncThunk";
import { fetchAsyncStores } from "@/store/asyncThunk/store-asyncThunk";
import GameList from "../_components/(games)/GameList";
import { HomeWrapper } from "./style";
import Title from "../_components/Title/Title";
import Preloader from "../_components/(shared)/Preloader/Preloader";
import { STATUS } from "@/utils/status";
import StoreList from "../_components/(stores)/StoreList";
import { join_image, store_image } from "@/utils/images";
import Tabs from "../_components/Tabs/Tabs";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const games = useAppSelector(selectAllGames);
  const gamesStatus = useAppSelector(selectAllGamesStatus);
  const genres = useAppSelector(selectAllGenres);
  const genresStatus = useAppSelector(selectAllGamesStatus);
  const stores = useAppSelector(selectAllStores);
  const storesStatus = useAppSelector(selectAllStoresStatus);

  useEffect(() => {
    dispatch(fetchAsyncGenres());
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncStores());
  }, []);

  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={games} />
      <div className="d-flex justify-content-center">
        <Link href="/games" className="section-btn">
          see more games
        </Link>
      </div>
    </>
  );

  return (
    <HomeWrapper>
      <Banner />
      <section className="section sc-popular">
        <div className="container">
          <Title
            titleName={{ firstText: "top popular", secondText: "games" }}
          />
          {gamesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedPopularGames
          ) : (
            "No games found!"
          )}
        </div>
      </section>
      <ImageSlider />

      <section
        className="section sc-join d-flex align-items-center"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${join_image.src}') center/cover no-repeat`,
        }}>
        <div className="container w-100">
          <div className="join-content text-white mx-auto text-center">
            <h2 className="join-title mb-3">
              JOIN THE <span>COMMUNITY</span>
            </h2>
            <p className="lead-text">
              Join our Discord community which is in the making and made by
              gamers for gamers. All are welcome to join no matter the game you
              play, we're here to have a good
            </p>
            <button type="button" className="section-btn mt-4">
              join discord
            </button>
          </div>
        </div>
      </section>

      <section className="section sc-genres">
        <div className="container">
          <Title titleName={{ firstText: "top", secondText: "genres" }} />
        </div>
        {genresStatus === STATUS.LOADING ? (
          <Preloader />
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} data={genres} />
        ) : (
          "No genres found!"
        )}
      </section>

      <section
        className="section sc-stores"
        style={{
          background: `linear-gradient(180deg, rgba(12, 10, 36, 0.73) 0%, rgba(0, 0, 0, 0.73) 72.92%), url('${store_image.src}') center/cover no-repeat`,
        }}>
        <div className="container">
          <Title titleName={{ firstText: "our", secondText: "game stores" }} />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores?.length > 0 ? (
            <StoreList stores={stores} />
          ) : (
            "No stores found!"
          )}
        </div>
      </section>
    </HomeWrapper>
  );
};

export default Home;
