import { useState } from "react";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlist-context";
import { MoreVertIcon, RemoveCircleIcon } from "../../icons/icons";

const PlaylistSingleVideoCard = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const { removeVideoFromPlaylist } = usePlaylistContext();

  return (
    <>
      <div className="video-card">
        <div className="card-head">
          <Link to={`/watch/${videos.video._id}`}>
            <img
              className="thumbnail"
              src={videos.video.thumbnail}
              alt="not found"
            />
          </Link>
          {toggle && (
            <ul className="card-actions">
              <li
                className="card-action"
                onClick={() =>
                  removeVideoFromPlaylist(videos.playlistId, videos.video._id)
                }
              >
                <RemoveCircleIcon className="card-icon" /> Remove from playlist
              </li>
            </ul>
          )}
        </div>
        <div className="card-body">
          <img
            className="channel-icon"
            src={videos.video.channelIcon}
            alt="#"
          />
          <div>
            <h5>{videos.video.title}</h5>
            <small className="card-sub-heading">
              {videos.video.channelName}
            </small>
          </div>
          <MoreVertIcon
            className="card-options-icon"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};

export default PlaylistSingleVideoCard;
