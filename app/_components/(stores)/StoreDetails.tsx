import React, { FC } from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StoreDetailsWrapper } from "./style";
import { Store } from "@/types/type";

interface StoreDetailsProps {
  storeData: Store;
}

const StoreDetails: FC<StoreDetailsProps> = ({ storeData }) => {
  return (
    <StoreDetailsWrapper>
      <div className="details-grid d-grid">
        <div className="details-left img-fit-cover">
          <LazyLoadImage
            src={storeData?.image_background}
            alt={storeData?.name}
          />
        </div>

        <div className="details-right">
          <h5 className="card-title text-uppercase fw-7">
            <Link href={`stores/${storeData.id}`} className="text-white">
              {storeData?.name}
            </Link>
          </h5>
          <ul className="card-info">
            <li>
              <span className="fw-7 text-white">Domain:</span>{" "}
              <a
                className="text-white"
                href={"https://www." + storeData?.domain}>
                {" "}
                {storeData?.domain}
              </a>
            </li>
            <li>
              <span className="fw-7 text-white">Games Count: </span>{" "}
              <span className="text-white">{storeData?.games_count}</span>
            </li>
          </ul>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{ __html: storeData?.description }}></div>
        </div>
      </div>
    </StoreDetailsWrapper>
  );
};

export default StoreDetails;
