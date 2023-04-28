import React from "react";
import Card from "../../components/Card/Card";
import ThankYou from "../../components/ThankYou/ThankYou";
import "./ThankYouPage.scss";

const ThankYouPage = () => {
  return (
    <section className="ThankYouPage">
      <Card />
      <ThankYou />
    </section>
  );
};

export default ThankYouPage;
