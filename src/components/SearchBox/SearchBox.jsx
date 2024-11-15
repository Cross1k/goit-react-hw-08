import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const findId = useId();

  const setFilter = (e) => {
    console.log(e);
    const action = filterContacts(e);
    dispatch(action);
  };

  return (
    <div className={css.container}>
      <label htmlFor={findId}>Find contacts by name:</label>
      <br />
      <input
        className={css.input}
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        id={findId}
      />
    </div>
  );
}
