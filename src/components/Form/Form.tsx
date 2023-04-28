import React, { ChangeEvent, FC } from "react";
import "./Form.scss";
import { Overlay } from "../Overlay/Overlay";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCardDetails } from "../../redux/features/cardSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidationSchema } from "../../utils/formValidationSchema";
import { CardDetailsType } from "../../types";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Form: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CardDetailsType>({
    mode: "onBlur",
    resolver: yupResolver(formValidationSchema),
  });

  const onSubmitForm: SubmitHandler<CardDetailsType> = (
    cardDetails: CardDetailsType
  ) => {
    dispatch(addCardDetails(cardDetails));
    reset();
    navigate("/thankyou");
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      addCardDetails({
        [event.target.name]: event.target.value,
      } as CardDetailsType)
    );
  };

  return (
    <section className="Form">
      <Overlay />
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {/* Cardholder name */}
        <div className={`Form__name ${errors.cardHolder && `input-error`}`}>
          <label htmlFor="card-name">Cardholder name</label>
          <input
            type="text"
            id="card-name"
            aria-label="cardholder name input"
            placeholder="e.g. Jane Appleseed"
            maxLength={24}
            {...register("cardHolder")}
            onChange={handleOnChange}
          />
          <span className="text-error">
            {errors.cardHolder && <div>{errors.cardHolder.message}</div>}
          </span>
        </div>

        {/* Card Number */}
        <div className={`Form__number ${errors.cardNumber && `input-error`}`}>
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            maxLength={16}
            aria-label="card number input"
            placeholder="e.g. 1234 5678 9123 0000"
            {...register("cardNumber")}
            onChange={handleOnChange}
          />
          <span className="text-error">
            {errors.cardNumber && <div>{errors.cardNumber.message}</div>}
          </span>
        </div>

        {/* Card Month */}
        <div className="Form__cardDetails">
          <div
            className={`Form__cardDetails--month ${
              errors.cardMonth && `input-error`
            }`}
          >
            <label htmlFor="card-expiry">Exp. Date</label>
            <input
              type="text"
              id="card-expiry"
              aria-label="expiry month input"
              placeholder="MM"
              maxLength={2}
              {...register("cardMonth")}
              onChange={handleOnChange}
            />
            <span className="text-error">
              {errors.cardMonth && <div>{errors.cardMonth.message}</div>}
            </span>
          </div>

          {/* Card Year */}
          <div
            className={`Form__cardDetails--year ${
              errors.cardYear && `input-error`
            }`}
          >
            <label htmlFor="card-year">(MM/YY)</label>
            <input
              type="text"
              id="card-year"
              aria-label="expiry year input"
              placeholder="YY"
              maxLength={2}
              {...register("cardYear")}
              onChange={handleOnChange}
            />
            <span className="text-error">
              {errors.cardYear && <div>{errors.cardYear.message}</div>}
            </span>
          </div>

          {/* Card CVC */}
          <div
            className={`Form__cardDetails--cvc ${
              errors.cardCvc && `input-error`
            }`}
          >
            <label htmlFor="card-cvc">Cvc</label>
            <input
              type="text"
              id="card-cvc"
              aria-label="cvc number input"
              placeholder="e.g. 123"
              maxLength={3}
              {...register("cardCvc")}
              onChange={handleOnChange}
            />
            <span className="text-error">
              {errors.cardCvc && <div>{errors.cardCvc.message}</div>}
            </span>
          </div>
        </div>
        <Button name="Confirm" />
      </form>
    </section>
  );
};

export default Form;
