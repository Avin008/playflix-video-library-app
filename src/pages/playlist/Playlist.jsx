import { PlaylistCard } from "../../components";
import { usePlaylistContext } from "../../context/playlist-context";
import EmptyList from "../empty-list/EmptyList";
import "./playlist.css";

const Playlist = () => {
  const { playlist } = usePlaylistContext();
  return (
    <>
      {playlist.length > 0 ? (
        <div className="container">
          {playlist.map((video) => (
            <PlaylistCard key={video._id} videos={video} />
          ))}
        </div>
      ) : (
        <EmptyList
          img="https://www.youtube.com/img/desktop/unavailable/unavailable_video_dark_theme.png"
          msg="empty history"
        />
      )}
    </>
  );
};

export default Playlist;
