import "./sidebar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

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
