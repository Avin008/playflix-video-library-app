import "./video-card.css";
import {
  MoreVertIcon,
  WatchLaterIcon,
  PlaylistAddIcon,
  FavoriteIcon,
} from "../../icons/icons";
import { useState } from "react";
import PlaylistModal from "../playlist-modal/PlaylistModal";

const VideoCard = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const [togglePlaylistModal, setTogglePlaylistModal] = useState(false);

  function togglePlaylist() {
    setTogglePlaylistModal((prev) => !prev);
  }

  return (
    <>
      <div className="thumbnail-card">
        <div className="card-head">
          <img className="thumbnail" src={videos.thumbnail} alt="not found" />
          {toggle && (
            <ul className="card-actions">
              <li onClick={() => setTogglePlaylistModal((prev) => !prev)}>
                <PlaylistAddIcon sx={{ fontSize: "1rem" }} /> ADD TO PLAYLIST
              </li>
              <li>
                <WatchLaterIcon sx={{ fontSize: "1rem" }} /> REMOVE FROM WATCH
                LATER
              </li>
              <li>
                <WatchLaterIcon sx={{ fontSize: "1rem" }} /> WATCH LATER
              </li>
              <li>
                <FavoriteIcon sx={{ fontSize: "1rem" }} /> REMOVE
              </li>
              <li>
                <FavoriteIcon sx={{ fontSize: "1rem" }} /> LIKE
              </li>
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
