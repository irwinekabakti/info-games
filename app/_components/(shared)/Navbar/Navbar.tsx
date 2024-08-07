"use client";
import React, { FC } from "react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import { BsRssFill, BsSteam, BsTwitch, BsYoutube } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import {
  selectSidebarStatus,
  setSidebarOff,
  setSidebarOn,
} from "@/store/action/sidebar-slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { NavbarWrapper } from "./style";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const sidebarStatus = useAppSelector(selectSidebarStatus);

  return (
    <NavbarWrapper className="d-flex align-items-center">
      <div className="container w-100">
        <div className="navbar-content">
          <div className="brand-and-toggler d-flex align-items-center justify-content-between">
            <Link
              href="/"
              className="navbar-brand text-white text-uppercase no-wrap">
              cool <span>games</span>
            </Link>
            <button
              type="button"
              className="navbar-show-btn text-white"
              aria-label="btn"
              onClick={() => dispatch(setSidebarOn())}>
              <HiOutlineMenuAlt3 size={25} />
            </button>
          </div>

          <div className={`navbar-collapse ${sidebarStatus ? "show" : ""}`}>
            <button
              type="button"
              className="navbar-hide-btn"
              aria-label="btn"
              onClick={() => dispatch(setSidebarOff())}>
              <MdClose size={25} />
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/creators" className="nav-link">
                  creators
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/stores" className="nav-link">
                  stores
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/games" className="nav-link">
                  games
                </Link>
              </li>
            </ul>

            <ul className="connect-list d-flex justify-content-center align-items-center mt-5 flex-wrap">
              <li className="text-uppercase fw-7 w-100 connect-text mb-2">
                connect
              </li>
              <li className="connect-item">
                <Link href="/" className="connect-link">
                  <BsRssFill />
                </Link>
              </li>
              <li className="connect-item">
                <Link href="/" className="connect-link">
                  <BsSteam size={18} />
                </Link>
              </li>
              <li className="connect-item">
                <Link href="/" className="connect-link">
                  <BsTwitch size={18} />
                </Link>
              </li>
              <li className="connect-item">
                <Link href="/" className="connect-link">
                  <BsYoutube size={19} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
