import "../styles/Layout.scss";

import React from "react";

import Logo from "./Logo";
import { PAGE_PATHS } from "ts/common/Contants";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      {window.location.pathname === PAGE_PATHS.HOME && <Logo />}
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
