"use client";

import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

interface LayoutNavbarFooterProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutNavbarFooterProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
