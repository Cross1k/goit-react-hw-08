import * as Yup from "yup";

export const PersonSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Format is XXX-XXX-XXXX")
    .required("Number is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password length must be at least 7 characters")
    .required("Password is required"),
});

export const RegistrationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(30, "Maximum 30 symbols")
    .required("Name is required"),
  password: Yup.string()
    .min(7, "Password length must be at least 7 characters")
    .required("Password is required"),
});
