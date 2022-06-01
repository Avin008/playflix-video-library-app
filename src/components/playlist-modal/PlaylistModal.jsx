import "./playlist-modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistModal = ({ data }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    playlist,
    createPlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
  } = usePlaylistContext();

  return (
    <>
      <div className="playlist-box">
        <div className="card-head">
          <h4 className="card-heading">Save To..</h4>
          <CloseIcon onClick={data.togglePlaylist} />
        </div>
        <div className="card-body">
          <input
            className="card-input"
            placeholder="enter playlist name"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          {error && <span style={{ color: "red" }}>{errorMsg}</span>}
          <button className="card-button" onClick={() => createPlaylist(input)}>
            CREATE PLAYLIST
          </button>
        </div>
        <div className="card-footer">
          {playlist.map((x) => (
            <li className="card-playlist-name">
              <input
                type="checkbox"
                onChange={() =>
                  x.videos.find((x) => x._id === data.videos._id)
                    ? removeVideoFromPlaylist(x._id, data.videos._id)
                    : addVideoToPlaylist(x._id, data.videos)
                }
                checked={
                  x.videos.find((x) => x._id === data.videos._id) ? true : false
                }
              />
              {x.title}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlaylistModal;
