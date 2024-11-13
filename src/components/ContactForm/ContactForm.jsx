import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactToList } from "../../redux/contactsOps";

const PersonSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Format is XXX-XXX-XXXX")
    .required("Number is required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const usernameId = useId();
  const numberId = useId();

  const handleAdd = (values, actions) => {
    const action = addContactToList({ ...values });
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
