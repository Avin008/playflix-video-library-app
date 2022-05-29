import "./playlist-modal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { usePlaylistContext } from "../../context/playlist-context";

const PlaylistModal = ({ data }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { playlist, createPlaylist, addVideoToPlaylist } = usePlaylistContext();

  //   function addToPlayList() {
  //     if (!input) {
  //       setError(true);
  //       setErrorMsg("please enter playlist name");
  //     } else if (
  //       state.playlist.find((x) => {
  //         if (x.playlistName === input) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       })
  //     ) {
  //       setError(true);
  //       setErrorMsg("playlist already exist");
  //     } else {
  //       setError(false);
  //       setInput("");
  //     }
  //   }

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
                onChange={() => addVideoToPlaylist(x._id, data.videos)}
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
