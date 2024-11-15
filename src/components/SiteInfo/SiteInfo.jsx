import { useSelector } from "react-redux";
import { selectUsername } from "../../redux/auth/selectors";
import css from "./SiteInfo.module.css";

const SiteInfo = () => {
  const userDataName = useSelector(selectUsername);
  return (
    <div className={css.div}>
      Hello, <b>{userDataName ? userDataName : "Guest"}</b>! Its Contacts Book
      created by{" "}
      <a href="https://github.com/Cross1k/" target="_blank">
        Cross1k
      </a>{" "}
      based on React/React-Redux/React-Router-Dom with{" "}
      <a href="https://connections-api.goit.global/docs/#/" target="_blank">
        backend
      </a>{" "}
      by{" "}
      <a href="https://github.com/luxplanjay" target="_blank">
        Alexander Repeta
      </a>{" "}
      lector of{" "}
      <a href="https://goit.global/" target="_blank">
        GOIT e-school
      </a>
      . You can add, delete contacts to your book, filter them by names. Enjoy
      😁!
    </div>
  );
};

export default SiteInfo;
