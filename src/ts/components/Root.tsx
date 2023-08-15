import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "./App";
import Store from "../redux/Store";

const Root = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
