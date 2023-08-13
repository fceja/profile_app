import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import LandingPageTemplateV2 from "../templates/LandingPageTemplateV2";
import Logo from "./Logo";
import MyGallery from "../pages/MyGallery";
import { PAGE_PATHS } from "ts/common/Contants";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={PAGE_PATHS.HOME} />} />
        <Route
          path={`${PAGE_PATHS.HOME}`}
          element={
            <LandingPageTemplateV2
              MainComponent={Home}
              OptionalComponent={Logo}
            />
          }
        />
        <Route
          path={`${PAGE_PATHS.GALLERY}`}
          element={<LandingPageTemplateV2 MainComponent={MyGallery} />}
        />
        <Route
          path={`${PAGE_PATHS.CONTACT}`}
          element={<LandingPageTemplateV2 MainComponent={Contact} />}
        />
      </Routes>
      <></>
    </>
  );
};

export default App;
