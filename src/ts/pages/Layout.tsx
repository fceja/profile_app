import React from "react";

import "@scss/pages/Layout.scss";
import NavBar from "@components/navBar/NavBar";
import Footer from "@components/footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
