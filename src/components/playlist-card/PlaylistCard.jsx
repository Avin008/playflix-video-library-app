import "./playlist-card.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlist-context";
import {
  PlaylistPlayIcon,
  MoreVertIcon,
  RemoveCircleIcon,
} from "../../icons/icons";

const PlaylistCard = ({ videos }) => {
  const [showOption, setShowOption] = useState(false);
  const { deletePlaylist } = usePlaylistContext();

  return (
    <div className="playlist-card">
      <Link to={`/playlist/${videos._id}`}>
        <div className="card-head">
          {videos.videos.length > 0 ? (
            <img src={videos.videos[0].thumbnail} alt={videos.title} />
          ) : (
            <img
              src="https://cdn.sanity.io/images/0vv8moc6/ophtalmology/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png"
              alt="img not found"
            />
          )}
          <div className="playlist-card-cover">
            <h1 className="playlist-length">{videos.videos.length}</h1>
            <PlaylistPlayIcon className="card-icon" />
          </div>
        </div>
      </Link>
      <div className="card-body">
        <span>{videos.title}</span>
        <MoreVertIcon onClick={() => setShowOption((prev) => !prev)} />
        {showOption && (
          <ul className="card-actions">
            <li
              className="card-action"
              onClick={() => deletePlaylist(videos._id)}
            >
              <RemoveCircleIcon className="card-icon" /> Remove Playlist
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;
