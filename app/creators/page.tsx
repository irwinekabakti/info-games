"use client";
import React, { FC, useEffect, useState } from "react";
import Layout from "../_components/(shared)/Layout";
import { CreatorAllPageWrapper } from "./style";
import CreatorList from "../_components/(creators)/CreatorList";
import Pagination from "../_components/Pagination/Pagination";
import Preloader from "../_components/(shared)/Preloader/Preloader";
import { STATUS } from "@/utils/status";
import Title from "../_components/Title/Title";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectAllCreators,
  selectAllCreatorsStatus,
  selectCreatorsNextPage,
  selectCreatorsPrevPage,
} from "@/store/action/creator-slice";
import { fetchAsyncCreators } from "@/store/asyncThunk/creator-asyncThunk";

const page: FC = () => {
  const dispatch = useAppDispatch();
  const creators = useAppSelector(selectAllCreators);
  const creatorsStatus = useAppSelector(selectAllCreatorsStatus);
  const nextPage = useAppSelector(selectCreatorsNextPage);
  const prevPage = useAppSelector(selectCreatorsPrevPage);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAsyncCreators(page));
  }, [page]);

  const pageHandler = (pageValue: number) => setPage(pageValue);

  return (
    <Layout>
      <CreatorAllPageWrapper>
        <div className="sc-creators section">
          <div className="container">
            <Title titleName={{ firstText: "our", secondText: "creators" }} />
            {creatorsStatus === STATUS.LOADING ? (
              <Preloader />
            ) : creators?.length > 0 ? (
              <>
                <CreatorList creators={creators} />
                <Pagination
                  pageHandler={pageHandler}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  currentPage={page}
                />
              </>
            ) : (
              "No creators found!"
            )}
          </div>
        </div>
      </CreatorAllPageWrapper>
    </Layout>
  );
};

export default page;
