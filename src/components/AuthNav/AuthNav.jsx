import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { useSelector } from "react-redux";
import { selectIsMobile } from "../../redux/format/selectors";
import { MdAppRegistration, MdLogin } from "react-icons/md";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const AuthNav = () => {
  const isMobile = useSelector(selectIsMobile);

  return (
    <>
      <NavLink className={buildCssClasses} to="/register" end>
        {isMobile ? <MdAppRegistration size={"32px"} /> : "Registration"}
      </NavLink>
      <NavLink className={buildCssClasses} to="/login" end>
        {isMobile ? <MdLogin size={"32px"} /> : "Log In"}
      </NavLink>
    </>
  );
};

export default AuthNav;
