import { Link } from "react-router-dom";
import "./page-not-found.css";

const PageNotFound = () => {
  return (
    <div className="main-container page-not-found-container">
      <div className="page-not-found">
        <img
          className="not-found-img"
          src="https://www.youtube.com/img/desktop/unavailable/unavailable_video_dark_theme.png"
          alt=""
        />
        <h2 className="not-found-heading">This Page isn't available</h2>
      </div>
      <Link className="go-home-btn" to="/">
        GO TO HOME
      </Link>
    </div>
  );
};

export default PageNotFound;
