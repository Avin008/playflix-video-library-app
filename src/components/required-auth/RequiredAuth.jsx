import { useAuth } from "../../context/auth-context";
import { GetUserLogged } from "../../pages";
const RequiredAuth = ({ children }) => {
  const { auth } = useAuth();
  if (auth.loginStatus) {
    return children;
  } else {
    return <GetUserLogged />;
  }
};

export default RequiredAuth;
