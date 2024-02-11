import { Navigate, Route, Routes } from "react-router-dom";

import "@scss/App.scss";
import { PAGE_PATHS } from "@/ts/common/Constants";
import ContactContainer from "@pages/contactPage/ContactPageContainer";
import MyImageGalleryContainer from "@pages/GalleryPage/GalleryPageContainer";
import HomeContainer from "@pages/homePage/HomePageContainer";
import LayoutContainer from "@pages/LayoutContainer";

// TODO - refactor as hooks for all components
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <LayoutContainer>
              <HomeContainer />
            </LayoutContainer>
          }
        />
        <Route
          path={PAGE_PATHS.GALLERY_PAGE}
          element={
            <LayoutContainer>
              <MyImageGalleryContainer />
            </LayoutContainer>
          }
        />
        <Route
          path={PAGE_PATHS.CONTACT_PAGE}
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