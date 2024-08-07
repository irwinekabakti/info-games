import React, { FC } from "react";
import StoreItem from "./StoreItem";
import { StoreListWrapper } from "./style";
import { Store } from "@/types/type";

interface StoreListProps {
  stores: Store[];
}

const StoreList: FC<StoreListProps> = ({ stores }) => {
  return (
    <StoreListWrapper>
      <div className="store-list d-grid">
        {stores?.map((item: any): any => (
          <StoreItem key={item.id} storeItem={item} />
        ))}
      </div>
    </StoreListWrapper>
  );
};

export default StoreList;
