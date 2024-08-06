import React, { FC } from "react";
import { PreloaderWrapper } from "./style";
import { loader } from "@/utils/images";
import Image from "next/image";

const Preloader: FC = () => {
  return (
    <PreloaderWrapper className="d-flex align-items-center justify-content-center">
      <Image src={loader} alt="preloader" />
    </PreloaderWrapper>
  );
};

export default Preloader;
