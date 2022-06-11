import { useAuth } from "../../context/auth-context";
import { UserNotLoggedIn } from "../../pages";
const RequiredAuth = ({ children }) => {
  const { auth } = useAuth();
  if (auth.loginStatus) {
    return children;
  } else {
    return <UserNotLoggedIn />;
  }
};

export default RequiredAuth;
