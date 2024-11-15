import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsMobile } from "../../redux/format/selectors";
import { MdHome } from "react-icons/md";

const buildCssClasses = ({ isActive }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  const isMobile = useSelector(selectIsMobile);

  return (
    <NavLink className={buildCssClasses} to="/">
      {isMobile ? <MdHome size={"32px"} /> : "Home page"}
    </NavLink>
  );
};

export default Navigation;
