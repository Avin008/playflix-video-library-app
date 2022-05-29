import "./playlist-card.css";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistCard = ({ videos }) => {
  const [showOption, setShowOption] = useState(false);
  const { deletePlaylist } = usePlaylistContext();

  return (
    <div className="playlist-card">
      <Link to={`/playlist/${videos._id}`}>
        <div className="card-head">
          {videos.videos.length > 0 ? (
            <img src={videos.videos[0].thumbnail} alt="" />
          ) : (
            <img
              src="https://cdn.sanity.io/images/0vv8moc6/ophtalmology/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png"
              alt=""
            />
          )}
          <div className="playlist-card-cover">
            <h1 className="playlist-length">{videos.videos.length}</h1>
            <PlaylistPlayIcon sx={{ fontSize: "1.5rem" }} />
          </div>
        </div>
      </Link>
      <div className="card-body">
        <MoreVertIcon onClick={() => setShowOption((prev) => !prev)} />
        {showOption && (
          <ul className="card-actions">
            <li onClick={() => deletePlaylist(videos._id)}>Remove Playlist</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;
