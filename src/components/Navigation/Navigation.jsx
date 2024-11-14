import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <NavLink className={buildCssClasses} to="/">
      Home page
    </NavLink>
  );
};

export default Navigation;
