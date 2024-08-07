import React, { FC } from "react";
import CreatorItem from "./CreatorItem";
import { CreatorListWrapper } from "./style";
import { Creator } from "@/types/type";

interface CreatorListProps {
  creators: Creator[];
}

const CreatorList: FC<CreatorListProps> = ({ creators }) => {
  return (
    <CreatorListWrapper>
      <div className="card-list">
        {creators?.map((item: any): any => (
          <CreatorItem key={item.id} creatorItem={item} />
        ))}
      </div>
    </CreatorListWrapper>
  );
};

export default CreatorList;
