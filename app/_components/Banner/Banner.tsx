import React, { FC } from "react";
import { FaGamepad } from "react-icons/fa";
import { banner_image } from "@/utils/images";
import { BannerWrapper } from "./style";

const Banner: FC = () => {
  return (
    <BannerWrapper
      className="d-flex align-items-center justify-content-start"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url('${banner_image.src}') center/cover no-repeat`,
      }}>
      <div className="banner-content w-100 container text-white">
        <div className="banner-badge text-uppercase">join streaming</div>
        <h1 className="banner-title text-uppercase">
          best online game to play
        </h1>
        <p className="lead-text">
          Live gaming with lots of other games ipsum dolor sit amet, consectetur
          adipiscing elit. Donec malesuadalorem maximus mauris scelerisque, at
          rutrum nulla dictum. Ut ac ligula sapien.
        </p>
        <button type="button" className="banner-btn d-flex align-items-center">
          <span className="btn-icon">
            <FaGamepad className="text-white" size={25} />
          </span>
          <span className="btn-text text-green">play now</span>
        </button>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
