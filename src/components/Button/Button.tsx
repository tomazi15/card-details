import React, { FC } from "react";
import "./Button.scss";
import { ButtonPropType } from "../../types";

const Button: FC<ButtonPropType> = ({
  name,
  onClick,
}: ButtonPropType): JSX.Element => {
  return (
    <button type="submit" className="Button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
