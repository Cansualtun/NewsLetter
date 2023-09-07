import * as Yup from "yup";

export const formValidationScheme = Yup.object({
  email: Yup.string().email().required("Bu Alan Gereklidir."),
});
