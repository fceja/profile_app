import "../../styles/App.scss"

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ContactContainer from "ts/pages/contact/ContactContainer";
import HomeContainer from "ts/pages/home/HomeContainer";
import LayoutContainer from "ts/pages/LayoutContainer";
import MyGalleryContainer from "ts/pages/myGallery/MyGalleryContainer";
import { PAGE_PATHS } from "ts/common/Contants";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={PAGE_PATHS.HOME} />} />
        <Route
          path={PAGE_PATHS.HOME}
          element={
            <LayoutContainer>
              <HomeContainer />
            </LayoutContainer>
          }
        />
        <Route
          path={PAGE_PATHS.MYGALLERY}
          element={
            <LayoutContainer>
              <MyGalleryContainer />
            </LayoutContainer>
          }
        />
        <Route
          path={PAGE_PATHS.CONTACT}
          element={
            <LayoutContainer>
              <ContactContainer />
            </LayoutContainer>
          }
        />
      </Routes>
    </>
  );
};

export default App;
