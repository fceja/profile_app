import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "styles/App.scss";
import HomeContainer from "ts/pages/home/HomeContainer";
import LayoutContainer from "ts/pages/LayoutContainer";
import { PAGE_PATHS } from "ts/common/Contants";

const MyImageGalleryContainer = lazy(
  () => import("ts/pages/myImageGallery/MyImageGalleryContainer")
);
const ContactContainer = lazy(
  () => import("ts/pages/contact/ContactContainer")
);

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="loading-fallback">
            <h1>Loading...</h1>
          </div>
        }
      >
        <Routes>
          <Route path="/*" element={<Navigate to={PAGE_PATHS.HOME} />} />
          <Route
            path={PAGE_PATHS.HOME}
            element={
              <LayoutContainer>
                <HomeContainer />
              </LayoutContainer>
            }
          />
          <Route
            path={PAGE_PATHS.MYIMAGEGALLERY}
            element={
              <LayoutContainer>
                <MyImageGalleryContainer />
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
      </Suspense>
    </>
  );
};

export default App;
