import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";

import { apiAddContactToList } from "../../redux/contacts/operations";
import { PersonSchema } from "../../utils/schemas";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const usernameId = useId();
  const numberId = useId();

  const handleAdd = (values, actions) => {
    const action = apiAddContactToList({ ...values });
    dispatch(action);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAdd}
      validationSchema={PersonSchema}
    >
      <Form className={css.form}>
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
          <label className={css.label} htmlFor={numberId}>
            Number:
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberId}
            autoComplete="off"
          ></Field>
          <ErrorMessage className={css.alert} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
