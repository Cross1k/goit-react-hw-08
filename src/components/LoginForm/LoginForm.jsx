import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";

import css from "./LoginForm.module.css";
import { LoginSchema } from "../../utils/schemas";
import { apiLoginUser } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const handleLogin = (values, actions) => {
    const action = apiLoginUser({ ...values });
    dispatch(action)
      .unwrap()
      .catch((error) => {
        if (error === "Request failed with status code 400")
          alert("There is no user with that email or incorect password");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      validationSchema={LoginSchema}
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
          ></Field>
          <ErrorMessage className={css.alert} name="email" component="span" />
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
          Log In
        </button>
      </Form>
    </Formik>
  );
}
