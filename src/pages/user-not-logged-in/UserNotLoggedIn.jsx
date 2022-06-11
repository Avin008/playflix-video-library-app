import { Link } from "react-router-dom";
import { AccountCircleOutlinedIcon } from "../../icons/icons";
import "./user-not-logged-in.css";

const UserNotLoggedIn = () => {
  return (
    <div className="main-container page-not-found-container">
      <div className="page-not-found">
        <img
          className="not-found-img"
          src="https://www.youtube.com/img/desktop/unavailable/unavailable_video_dark_theme.png"
          alt=""
        />
        <h2 className="not-found-heading">Enjoy your favourite videos</h2>
        <p style={{ color: "white" }}>
          Sign in to access recent, liked or saved videos
        </p>
      </div>
      <Link className="go-home-btn" to="/login">
        <AccountCircleOutlinedIcon />
        SIGN IN
      </Link>
    </div>
  );
};

export default UserNotLoggedIn;
