"use client";

import React, { FC, useEffect } from "react";
import Layout from "@/app/_components/(shared)/Layout";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectSingleStore,
  selectSingleStoreStatus,
} from "@/store/action/store-slice";
import { fetchAsyncStoresDetails } from "@/store/asyncThunk/store-asyncThunk";
import { StoreDetailsPageWrapper } from "./style";
import Breadcrumb from "@/app/_components/BreadCrumb/BreadCrumb";
import { STATUS } from "@/utils/status";
import Preloader from "@/app/_components/(shared)/Preloader/Preloader";
import StoreDetails from "@/app/_components/(stores)/StoreDetails";
import { useParams } from "next/navigation";

const page: FC = () => {
  const params = useParams();
  const storeId = params.storeId as string;

  const dispatch = useAppDispatch();
  const singleStoreData = useAppSelector(selectSingleStore);
  const singleStoreStatus = useAppSelector(selectSingleStoreStatus);

  useEffect(() => {
    dispatch(fetchAsyncStoresDetails(storeId));
  }, [storeId]);

  const storeNameById = {
    [singleStoreData.id]: singleStoreData.name,
  };

  return (
    <Layout>
      <StoreDetailsPageWrapper>
        <div className="sc-details">
          <div className="container">
            <Breadcrumb dataNameById={storeNameById} />
            {singleStoreStatus === STATUS.LOADING ? (
              <Preloader />
            ) : (
              <StoreDetails storeData={singleStoreData} />
            )}
          </div>
        </div>
      </StoreDetailsPageWrapper>
    </Layout>
  );
};

export default page;
