import "./video-card.css";
import {
  MoreVertIcon,
  WatchLaterIcon,
  PlaylistAddIcon,
  FavoriteIcon,
} from "../../icons/icons";
import { useState } from "react";
import PlaylistModal from "../playlist-modal/PlaylistModal";
import { useHistory } from "../../context/history-context";
import { useLikedContext } from "../../context/like-context";
import { useWatchLater } from "../../context/watch-later-context";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const VideoCard = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const [togglePlaylistModal, setTogglePlaylistModal] = useState(false);
  const { likes, addToLiked, removeFromLiked } = useLikedContext();
  const { watchLater, addToWatchLater, removeFromWatchLater } = useWatchLater();
  const { addToHistory } = useHistory();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const togglePlaylist = () => setTogglePlaylistModal((prev) => !prev);

  return (
    <div className="video-card">
      <div className="card-head" onClick={() => addToHistory(videos)}>
        <Link to={`/watch/${videos._id}`}>
          <img
            className="thumbnail"
            src={videos.thumbnail}
            alt={videos.title}
          />
        </Link>
        {toggle && (
          <ul className="card-actions">
            <li
              className="card-action"
              onClick={() =>
                auth.loginStatus
                  ? setTogglePlaylistModal((prev) => !prev)
                  : navigate("login")
              }
            >
              <PlaylistAddIcon className="card-icon" /> ADD TO PLAYLIST
            </li>
            {watchLater.find((x) => x._id === videos._id) ? (
              <li
                className="card-action"
                onClick={() => removeFromWatchLater(videos._id)}
              >
                <WatchLaterIcon className="card-icon card-icon-active" /> REMOVE
                FROM WATCH LATER
              </li>
            ) : (
              <li
                className="card-action"
                onClick={() =>
                  auth.loginStatus ? addToWatchLater(videos) : navigate("login")
                }
              >
                <WatchLaterIcon className="card-icon" /> WATCH LATER
              </li>
            )}
            {likes.find((x) => x._id === videos._id) ? (
              <li
                className="card-action"
                onClick={() => removeFromLiked(videos._id)}
              >
                <FavoriteIcon className="card-icon card-icon-active" /> REMOVE
              </li>
            ) : (
              <li
                className="card-action"
                onClick={() =>
                  auth.loginStatus ? addToLiked(videos) : navigate("login")
                }
              >
                <FavoriteIcon className="card-icon" /> LIKE
              </li>
            )}
          </ul>
        )}
      </div>
      <div className="card-body">
        <img className="channel-icon" src={videos.channelIcon} alt="#" />
        <div>
          <h5>{videos.title}</h5>
          <small className="card-sub-heading">{videos.channelName}</small>
        </div>
        <MoreVertIcon
          className="card-options-icon"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      {togglePlaylistModal && (
        <PlaylistModal data={{ togglePlaylist, videos }} />
      )}
    </div>
  );
};

export default VideoCard;
