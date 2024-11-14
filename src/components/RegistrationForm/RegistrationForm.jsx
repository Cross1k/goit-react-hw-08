import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { RegistrationSchema } from "../../utils/schemas";
import { apiRegisterUser } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const emailId = useId();
  const usernameId = useId();
  const passwordId = useId();

  const handleRegistration = (values, actions) => {
    const action = apiRegisterUser({ ...values });
    dispatch(action)
      .unwrap()
      .catch((error) => {
        if (error === "Request failed with status code 400") {
          alert("User with this email already exists");
        }
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegistration}
      validationSchema={RegistrationSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldInput}>
          <label className={css.label} htmlFor={emailId}>
            Email:
          </label>
          <Field
            className={css.input}
            type="text"
            name="email"
            id={emailId}
            autoComplete="off"
          ></Field>
          <ErrorMessage className={css.alert} name="email" component="span" />
        </div>
        <div className={css.fieldInput}>
          <label className={css.label} htmlFor={usernameId}>
            Name:
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={usernameId}
            autoComplete="off"
          ></Field>
          <ErrorMessage className={css.alert} name="name" component="span" />
        </div>
        <div className={css.fieldInput}>
          <label className={css.label} htmlFor={passwordId}>
            Password:
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordId}
          ></Field>
          <ErrorMessage
            className={css.alert}
            name="password"
            component="span"
          />
        </div>
        <button className={css.button} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
}
