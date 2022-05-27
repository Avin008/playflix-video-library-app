import "./sidebar.css";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  VideoLibraryIcon,
  FavoriteIcon,
  HistoryIcon,
  WatchLaterIcon,
} from "../../icons/icons";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <NavLink to="/" className="list-items">
        <HomeIcon /> Home
      </NavLink>
      <NavLink to="/playlist" className="list-items">
        <VideoLibraryIcon /> Playlist
      </NavLink>
      <NavLink to="liked" className="list-items">
        <FavoriteIcon />
        Liked
      </NavLink>
      <NavLink to="/watch-later" className="list-items">
        <WatchLaterIcon /> Watch Later
      </NavLink>
      <NavLink to="history" className="list-items">
        <HistoryIcon /> History
      </NavLink>
    </ul>
  );
};

export default Sidebar;
