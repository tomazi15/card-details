import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ThankYouPage from "../pages/ThankYouPage/ThankYouPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/thankyou" element={<ThankYouPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default App;
