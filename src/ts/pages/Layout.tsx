import React from "react";

import "../../styles/pages/Layout.scss"
import Logo from "../components/logo/Logo";
import { PAGE_PATHS } from "ts/common/Contants";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

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
