import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const AuthNav = () => {
  return (
    <>
      <NavLink className={buildCssClasses} to="/register" end>
        Registration
      </NavLink>
      <NavLink className={buildCssClasses} to="/login" end>
        Log In
      </NavLink>
    </>
  );
};

export default AuthNav;
