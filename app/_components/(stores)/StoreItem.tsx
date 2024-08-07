import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { StoreItemWrapper } from "./style";
import { Store } from "@/types/type";

interface StoreItemProps {
  storeItem: Store;
}

const StoreItem: FC<StoreItemProps> = ({ storeItem }) => {
  return (
    <StoreItemWrapper className="card d-grid">
      <div className="card-img img-fit-cover">
        <Image
          src={storeItem?.image_background}
          alt={storeItem.name}
          width={100}
          height={100}
          quality={100}
          rel="preload"
        />
      </div>
      <div className="card-text d-flex flex-column justify-content-center">
        <h5 className="card-title text-uppercase fw-7 text-uppercase">
          <Link className="text-white" href={`stores/${storeItem.id}`}>
            {storeItem?.name}
          </Link>
        </h5>
        <ul className="card-info">
          <li>
            <span className="fw-7">Domain:</span>{" "}
            <a href={"https://www." + storeItem?.domain}>
              {" "}
              {storeItem?.domain}
            </a>
          </li>
          <li>
            <span className="fw-7">Games Count: </span> {storeItem?.games_count}
          </li>
        </ul>
        {storeItem?.games && <p className="fw-7 text-white">Games: </p>}
        <ul className="card-games d-flex flex-wrap">
          {storeItem?.games?.map((item: any) => {
            return (
              <li className="card-game" key={item.id}>
                <Link href={`games/${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </StoreItemWrapper>
  );
};

export default StoreItem;
