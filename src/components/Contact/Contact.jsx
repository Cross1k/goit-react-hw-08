import { BsPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contacts/operations";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const deletePerson = (personId) => {
    const action = apiDeleteContact(personId);
    dispatch(action);
  };

  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          <BsPersonFill className={css.icons} size={24} />
          {name}
        </p>
        <p className={css.text}>
          <BsTelephoneFill className={css.icons} size={24} /> {number}
        </p>
      </div>
      <button onClick={() => deletePerson(id)}>Delete</button>
    </>
  );
}
