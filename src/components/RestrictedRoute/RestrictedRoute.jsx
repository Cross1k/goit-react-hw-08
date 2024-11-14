import { useSelector } from "react-redux";
import { selectLoggedin } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const userIsLogged = useSelector(selectLoggedin);
  return userIsLogged ? <Navigate to={redirectTo} replace /> : component;
};

export default RestrictedRoute;
