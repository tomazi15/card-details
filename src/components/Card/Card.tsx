import React, { FC } from "react";
import "./Card.scss";
import { ReactComponent as CardLogo } from "../../images/card-logo.svg";
import { useSelector } from "react-redux";
import { InitialStateType } from "../../types";

export const Card: FC = (): JSX.Element => {
  const cardDisplayDetails: InitialStateType = useSelector(
    (state: any) => state.card
  );

  return (
    <section className="Card">
      <div className="Card__back" role="img" aria-label="back of a credit card">
        <span className="Card__back--ccv">
          {!cardDisplayDetails.cardCvc ? "000" : cardDisplayDetails.cardCvc}
        </span>
      </div>

      <div
        className="Card__front"
        role="img"
        aria-label="front of a credit card"
      >
        <div className="Card__frontIcons">
          <span className="Card__frontIcons--logo">
            <CardLogo />
          </span>
        </div>

        <div className="Card__frontDetails">
          <div className="Card__frontDetails--number">
            <span>
              {!cardDisplayDetails.cardNumber
                ? "0000 0000 0000 0000"
                : cardDisplayDetails.cardNumber.match(/.{1,4}/g)?.join(" ")}
            </span>
          </div>
          <div className="Card__frontDetails--details">
            <span>
              {!cardDisplayDetails.cardHolder
                ? "George Brown"
                : cardDisplayDetails.cardHolder}
            </span>
            <span>
              {!cardDisplayDetails.cardMonth
                ? "00"
                : cardDisplayDetails.cardMonth}
              /
              {!cardDisplayDetails.cardYear
                ? "00"
                : cardDisplayDetails.cardYear}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
