import { useState } from "react";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context/playlist-context";
import { MoreVertIcon, RemoveCircleIcon } from "../../icons/icons";

const PlaylistSingleVideoCard = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const { removeVideoFromPlaylist } = usePlaylistContext();

  return (
    <>
      <div className="thumbnail-card">
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
                onClick={() =>
                  removeVideoFromPlaylist(videos.playlistId, videos.video._id)
                }
              >
                <RemoveCircleIcon sx={{ fontSize: "1rem" }} /> Remove from
                playlist
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
            <small style={{ color: "gray", fontWeight: "bold" }}>
              {videos.video.channelName}
            </small>
          </div>
          <MoreVertIcon
            sx={{ color: "white", fontSize: "1.3rem", cursor: "pointer" }}
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};

export default PlaylistSingleVideoCard;
