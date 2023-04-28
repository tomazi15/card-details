import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardDetailsType, InitialStateType } from "../../types";

export const initialState: InitialStateType = {
  cardHolder: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  cardCvc: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    addCardDetails: (state, action: PayloadAction<CardDetailsType>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addCardDetails } = cardSlice.actions;
export default cardSlice.reducer;
