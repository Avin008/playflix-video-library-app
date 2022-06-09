import "./playlist-modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistModal = ({ data }) => {
  const [playlistName, setPlaylistName] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    playlist,
    createPlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
  } = usePlaylistContext();

  const checkInput = () => {
    if (!playlistName) {
      setError(true);
      setErrorMsg("please input playlist name");
    } else if (playlist.find((x) => x.title === playlistName) ? true : false) {
      setError(true);
      setErrorMsg("playlist already exist");
    } else {
      setError(false);
      setErrorMsg("");
      createPlaylist(playlistName);
      setPlaylistName("");
    }
  };

  return (
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
          onChange={(e) => setPlaylistName(e.target.value)}
          value={playlistName}
        />
        {error && <span className="error-msg">{errorMsg}</span>}
        <button className="card-button" onClick={() => checkInput()}>
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
  );
};

export default PlaylistModal;
