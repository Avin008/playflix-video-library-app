import { PlaylistCard } from "../../components";
import { usePlaylistContext } from "../../context/playlist-context";
import "./playlist.css";

const Playlist = () => {
  const { playlist } = usePlaylistContext();
  return (
    <>
      <div className="container">
        {playlist.map((video) => (
          <PlaylistCard key={video._id} videos={video} />
        ))}
      </div>
    </>
  );
};

export default Playlist;
