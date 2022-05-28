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
import { Link } from "react-router-dom";

const VideoCard = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const [togglePlaylistModal, setTogglePlaylistModal] = useState(false);
  const { addToHistory, history, removeFromHistory } = useHistory();
  const { likes, addToLiked, removeFromLiked } = useLikedContext();
  const { watchLater, addToWatchLater, removeFromWatchLater } = useWatchLater();

  function togglePlaylist() {
    setTogglePlaylistModal((prev) => !prev);
  }

  return (
    <>
      <div className="thumbnail-card">
        <div className="card-head" onClick={() => addToHistory(videos)}>
          <Link to={`/watch/${videos._id}`}>
            <img className="thumbnail" src={videos.thumbnail} alt="not found" />
          </Link>
          {toggle && (
            <ul className="card-actions">
              <li onClick={() => setTogglePlaylistModal((prev) => !prev)}>
                <PlaylistAddIcon sx={{ fontSize: "1rem" }} /> ADD TO PLAYLIST
              </li>
              {watchLater.find((x) => x._id === videos._id) ? (
                <li onClick={() => removeFromWatchLater(videos._id)}>
                  <WatchLaterIcon sx={{ fontSize: "1rem" }} /> REMOVE FROM WATCH
                  LATER
                </li>
              ) : (
                <li onClick={() => addToWatchLater(videos)}>
                  <WatchLaterIcon sx={{ fontSize: "1rem" }} /> WATCH LATER
                </li>
              )}
              {likes.find((x) => x._id === videos._id) ? (
                <li onClick={() => removeFromLiked(videos._id)}>
                  <FavoriteIcon sx={{ fontSize: "1rem" }} /> REMOVE
                </li>
              ) : (
                <li onClick={() => addToLiked(videos)}>
                  <FavoriteIcon sx={{ fontSize: "1rem" }} /> LIKE
                </li>
              )}
              {history.find((x) => x._id === videos._id) && (
                <li onClick={() => removeFromHistory(videos._id)}>
                  <FavoriteIcon sx={{ fontSize: "1rem" }} /> Remove From History
                </li>
              )}
            </ul>
          )}
        </div>
        <div className="card-body">
          <img className="channel-icon" src={videos.channelIcon} alt="#" />
          <div>
            <h5>{videos.title}</h5>
            <small style={{ color: "gray", fontWeight: "bold" }}>
              {videos.channelName}
            </small>
          </div>
          <MoreVertIcon
            sx={{ color: "white", fontSize: "1.3rem", cursor: "pointer" }}
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        {togglePlaylistModal && (
          <PlaylistModal data={{ togglePlaylist, videos }} />
        )}
      </div>
    </>
  );
};

export default VideoCard;
