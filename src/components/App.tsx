import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ContactContainer from "pages/contact/ContactContainer";
import HomeContainer from "pages/home/HomeContainer";
import LayoutContainer from "./LayoutContainer";
import MyGalleryContainer from "pages/mygallery/MyGalleryContainer";
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
      <></>
    </>
  );
};

export default App;
