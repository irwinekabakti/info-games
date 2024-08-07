"use client";

import React, { FC, useEffect } from "react";
import Layout from "../_components/(shared)/Layout";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchAsyncStores } from "@/store/asyncThunk/store-asyncThunk";
import {
  selectAllStores,
  selectAllStoresStatus,
} from "@/store/action/store-slice";
import { StoreAllPageWrapper } from "./style";
import Title from "../_components/Title/Title";
import { STATUS } from "@/utils/status";
import Preloader from "../_components/(shared)/Preloader/Preloader";
import StoreList from "../_components/(stores)/StoreList";

const page: FC = () => {
  const dispatch = useAppDispatch();
  const stores = useAppSelector(selectAllStores);
  const storesStatus = useAppSelector(selectAllStoresStatus);

  useEffect(() => {
    dispatch(fetchAsyncStores());
  }, []);

  return (
    <Layout>
      <StoreAllPageWrapper>
        <div className="sc-stores section">
          <div className="container">
            <Title titleName={{ firstText: "all", secondText: "stores" }} />
            {storesStatus === STATUS.LOADING ? (
              <Preloader />
            ) : stores?.length > 0 ? (
              <>
                <StoreList stores={stores} />
              </>
            ) : (
              "No stores found!"
            )}
          </div>
        </div>
      </StoreAllPageWrapper>
    </Layout>
  );
};

export default page;
