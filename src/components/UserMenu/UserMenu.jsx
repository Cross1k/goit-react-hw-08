import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUsername } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/operations";
import clsx from "clsx";
import css from "./UserMenu.module.css";
import { selectIsMobile } from "../../redux/format/selectors";
import { IoMdContacts } from "react-icons/io";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const UserMenu = () => {
  const dispatch = useDispatch();
  const userDataName = useSelector(selectUsername);
  const isMobile = useSelector(selectIsMobile);

  const onLogout = () => {
    dispatch(apiLogoutUser());
  };

  return (
    <>
      <NavLink className={buildCssClasses} to="/contacts" end>
        {isMobile ? <IoMdContacts size={"32px"} /> : "Contacts"}
      </NavLink>
      <p className={css.p}>
        {isMobile ? "👋" : "Welcome,"}{" "}
        <span className={css.span}>{userDataName}</span>
      </p>
      <button type="button" onClick={onLogout}>
        Log Out
      </button>
    </>
  );
};

export default UserMenu;
