import React, { FC } from "react";
import { TitleWrapper } from "./style";

interface TitleNameProps {
  firstText: string;
  secondText: string;
}

interface TitleProps {
  titleName: TitleNameProps;
}

const Title: FC<TitleProps> = ({ titleName }) => {
  return (
    <TitleWrapper>
      <h3>
        {titleName.firstText} <span>{titleName.secondText}</span>
      </h3>
      <div className="line"></div>
    </TitleWrapper>
  );
};

export default Title;
