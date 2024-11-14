import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectLoggedin } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const userIsLogged = useSelector(selectLoggedin);

  return (
    <>
      <Navigation />
      {userIsLogged ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default AppBar;
