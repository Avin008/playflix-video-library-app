import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useVideoContext } from "../../context/video-context";
import {
  SearchOutlinedIcon,
  AccountCircleIcon,
  LiveTvIcon,
} from "../../icons/icons";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const { searchFunc, setSearchKey } = useVideoContext();

  const logoutUser = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER_INFO");

    setAuth({
      loginStatus: false,
      token: localStorage.getItem("TOKEN"),
      user: localStorage.getItem("USER_INFO"),
    });
  };

  return (
    <nav className="navbar">
      <Link className="links" to="/">
        <div className="brand-container">
          <LiveTvIcon />
          <span className="brand-name">PlayFlix</span>
        </div>
      </Link>
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            searchFunc(e.target.value);
            setSearchKey(e.target.value);
          }}
        />
        <button className="search-btn">
          <SearchOutlinedIcon className="search-icon" />
        </button>
      </div>
      <div className="navbar-actions">
        {!auth.loginStatus ? (
          <Link className="links" to="/login">
            <button className="login-btn">
              <AccountCircleIcon /> SIGN IN
            </button>
          </Link>
        ) : (
          <button className="login-btn" onClick={logoutUser}>
            <AccountCircleIcon /> LOGOUT
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
