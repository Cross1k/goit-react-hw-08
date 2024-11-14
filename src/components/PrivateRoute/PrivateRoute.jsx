import { useSelector } from "react-redux";
import { selectLoggedin } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const userIsLogged = useSelector(selectLoggedin);
  return userIsLogged ? component : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
