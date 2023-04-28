import React from "react";
import "./ThankYou.scss";
import Button from "../Button/Button";
import { ReactComponent as CompleteLogo } from "../../images/icon-complete.svg";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="ThankYou">
      <CompleteLogo />
      <h1 className="ThankYou__heading">Thank You!</h1>
      <p className="ThankYou__paragraph">We've added your details</p>
      <Button name="Continue" onClick={handleClick} />
    </section>
  );
};

export default ThankYou;
