export type InitialStateType = {
  cardHolder: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCvc: string;
};

export type CardDetailsType = {
  cardHolder: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCvc: string;
};

export type ButtonPropType = {
  name: string;
  onClick?: () => void;
};
