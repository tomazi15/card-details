import { InitialStateType } from "../../types";
import cardSlice, { initialState, addCardDetails } from "./cardSlice";

describe("CardSlice", () => {
  test("initialize slice with initialValue", () => {
    const cardSliceInit = cardSlice(initialState, { type: "unknown" });

    expect(cardSliceInit).toBe(initialState);
  });

  test("reducerUpdatesTheState updates the state with correct data", () => {
    const testData: InitialStateType = {
      cardHolder: "foo",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvc: "",
    };

    const reducerUpdatesTheState = cardSlice(
      initialState,
      addCardDetails(testData)
    );

    expect(reducerUpdatesTheState).toStrictEqual({
      cardCvc: "",
      cardHolder: "foo",
      cardMonth: "",
      cardNumber: "",
      cardYear: "",
    });
  });
});
