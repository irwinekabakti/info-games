"use client";
import React, { FC } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PaginationWrapper } from "./style";

interface PaginationProps {
  pageHandler: (page: number) => void;
  nextPage: string | null;
  prevPage: string | null;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
  pageHandler,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const pageNextHandler = () => {
    if (nextPage !== null) pageHandler(++currentPage);
  };

  const pagePrevHandler = () => {
    console.log("is disabled");
    if (prevPage !== null) pageHandler(--currentPage);
  };

  return (
    <PaginationWrapper className="d-flex align-items-center justify-content-center">
      <button
        type="button"
        className={`prev-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          prevPage === null ? "disabled" : ""
        }`}
        disabled={prevPage === null ? true : false}
        onClick={pagePrevHandler}>
        <AiOutlineArrowLeft className="me-3" /> Prev
      </button>
      <button
        type="button"
        className={`next-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          nextPage === null ? "disabled" : ""
        }`}
        disabled={nextPage === null ? true : false}
        onClick={pageNextHandler}>
        Next <AiOutlineArrowRight className="ms-3" />
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
