"use client";
import React, { useState } from "react";
import GenreItem from "../(genres)/GenreItem";
import { AiOutlineMenu } from "react-icons/ai";
import { TabsWrapper } from "./style";

const Tabs = ({ data, sliceValue = data.length }: any) => {
  const [activeTab, setActiveTab] = useState(data[0]);
  const [tabButtonsStatus, setTabButtonStatus] = useState(false);

  const tabClickHandler = (id: number) => {
    data.map((item: any) => {
      if (item.id === id) {
        setActiveTab(item);
      }
    });
  };

  const tabButtonsHandler = () =>
    setTabButtonStatus((prevStatus) => !prevStatus);

  return (
    <TabsWrapper className="bg-white">
      <div className="container">
        <div className="tabs-content">
          <ul className={`tabs-buttons ${tabButtonsStatus ? "show" : ""}`}>
            <button
              type="button"
              className="tabs-buttons-close bg-white d-flex align-items-center justify-content-center"
              aria-label="btn"
              onClick={tabButtonsHandler}>
              <AiOutlineMenu size={22} />
            </button>

            {data.map((item: any) => {
              return (
                <li
                  key={item?.id}
                  className={`tabs-button ${
                    item?.id === activeTab.id ? "tabs-active" : ""
                  }`}>
                  <button
                    className="text-white"
                    type="button"
                    onClick={() => tabClickHandler(item?.id)}>
                    {item?.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="tabs-body">
            <div className="card-list">
              {activeTab?.games?.map((item: any) => (
                <GenreItem key={item.id} gameItem={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TabsWrapper>
  );
};

export default Tabs;
