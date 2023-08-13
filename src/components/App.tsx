import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomeContainer from "pages/home/HomeContainer";
import LayoutContainer from "./LayoutContainer";
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
      </Routes>
      <></>
    </>
  );
};

export default App;
