"use client";
import React from "react";
import Image from "next/image";
import {
  AiFillClockCircle,
  AiOutlineDesktop,
  AiFillSetting,
} from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GameDetailsWrapper } from "./style";
import StoreItem from "../(stores)/StoreItem";

const GameDetails = ({ gameData }: any) => {
  let platforms = gameData?.platforms?.map(
    (platform: any) => platform.platform.name
  );
  let developers = gameData?.developers?.map(
    (developer: any) => developer.name
  );
  let genres = gameData?.genres?.map((genre: any) => genre.name);
  let publishers = gameData?.publishers?.map(
    (publisher: any) => publisher.name
  );

  console.log(gameData);

  return (
    <GameDetailsWrapper>
      <div className="details-title">
        <h3 className="details-title-text text-white fw-6 text-uppercase">
          {gameData?.name}
        </h3>
      </div>
      <div className="details-grid d-grid">
        <div className="details-left img-fit-cover">
          <LazyLoadImage
            src={gameData?.background_image}
            alt={gameData?.name}
          />
        </div>

        <div className="details-right">
          <h4 className="details-right-title fw-7 text-green mb-3">
            Game<span className="text-white">Details</span>
          </h4>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{
              __html:
                gameData?.description?.split(".").splice(0, 2).join(".") + ".",
            }}></div>

          <ul className="details-list-group">
            <li className="list-group-item text-white d-flex align-itesm-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillClockCircle size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  release date :
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {gameData?.released}
              </span>
            </li>

            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiOutlineDesktop size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  platforms :
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {platforms?.join(", ")}
              </span>
            </li>

            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillSetting size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  developers :
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {developers?.join(", ")}
              </span>
            </li>

            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillSetting size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">genre :</span>
              </div>
              <span className="item-right item-value fw-4">
                {genres?.join(", ")}
              </span>
            </li>

            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <FaGlobe size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  Publishers :
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {publishers?.join(", ")}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Platform</Tab>
          <Tab>Stores</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-white mb-3">Game Description</h3>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{ __html: gameData?.description }}></div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-white mb-3">Game Platforms</h3>
          <div className="platforms-list card-list">
            {gameData?.platforms?.map((item: any) => {
              return (
                <div
                  className="platform-item text-white"
                  key={item?.platform?.id}>
                  <p className="platform-name mb-2">{item?.platform?.name}</p>
                  <div className="platform-img-wrapper img-fit-cover">
                    <Image
                      src={item?.platform?.image_background}
                      className="platform-img"
                      alt="img-background"
                      width={100}
                      height={100}
                      quality={100}
                      rel="preload"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-white mb-3">Available Stores: </h3>
          <div className="card-list">
            {gameData?.stores?.map((item: any) => (
              <StoreItem key={item?.store?.id} storeItem={item?.store} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </GameDetailsWrapper>
  );
};

export default GameDetails;
