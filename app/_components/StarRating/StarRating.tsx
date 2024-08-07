import React, { FC } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { StarRatingWrapper } from "./style";

interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <li key={idx}>
        {rating >= idx + 1 ? (
          <BsStarFill />
        ) : rating >= val ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </li>
    );
  });

  return (
    <StarRatingWrapper className="rating d-flex align-items-start text-green">
      {stars}
    </StarRatingWrapper>
  );
};

export default StarRating;
