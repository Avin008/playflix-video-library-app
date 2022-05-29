import { PlaylistCard } from "../../components";
import { usePlaylistContext } from "../../context/playlist-context";
import "./playlist.css";

const Playlist = () => {
  const { playlist } = usePlaylistContext();
  return (
    <>
      <div className="main-container">
        {playlist.map((x) => (
          <PlaylistCard videos={x} />
        ))}
      </div>
    </>
  );
};

export default Playlist;
