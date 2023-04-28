import * as yup from "yup";

export const formValidationSchema = yup.object().shape({
  cardHolder: yup.string().required("* Enter cardholder name"),
  cardNumber: yup
    .string()
    .min(16, "* Card number is to short (16 digits)")
    .required("* Enter valid card number"),
  cardMonth: yup.string().min(2, "* 2 digits").required("* Required"),
  cardYear: yup.string().min(2, "* 2 digits").required("* Required"),
  cardCvc: yup.string().min(3, "* 3 digits").required("* Enter valid CVC"),
});
