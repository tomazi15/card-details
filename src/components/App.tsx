import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ThankYouPage from "../pages/ThankYouPage/ThankYouPage";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/thankyou" element={<ThankYouPage />}></Route>
    </Routes>
  );
};

export default App;
