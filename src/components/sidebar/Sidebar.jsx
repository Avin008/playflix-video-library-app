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
        <HomeIcon /> <span className="item-name">Home</span>
      </NavLink>
      <NavLink to="/playlist" className="list-items">
        <VideoLibraryIcon /> <span className="item-name">Playlist</span>
      </NavLink>
      <NavLink to="liked" className="list-items">
        <FavoriteIcon />
        <span className="item-name">Liked</span>
      </NavLink>
      <NavLink to="/watch-later" className="list-items">
        <WatchLaterIcon /> <span className="item-name">Watch Later</span>
      </NavLink>
      <NavLink to="history" className="list-items">
        <HistoryIcon /> <span className="item-name">History</span>
      </NavLink>
    </ul>
  );
};

export default Sidebar;
