import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUsername } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";
import clsx from "clsx";
import css from "./UserMenu.module.css";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const UserMenu = () => {
  const dispatch = useDispatch();
  const userDataName = useSelector(selectUsername);

  const onLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <>
      <NavLink className={buildCssClasses} to="/contacts" end>
        Contacts
      </NavLink>
      <p className={css.p}>
        Welcome, <span className={css.span}>{userDataName}</span>
      </p>
      <button type="button" onClick={onLogout}>
        Log Out
      </button>
    </>
  );
};

export default UserMenu;
