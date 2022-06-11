import { PlaylistCard } from "../../components";
import { usePlaylistContext } from "../../context/playlist-context";
import EmptyPage from "../empty-page/EmptyPage";

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
        <EmptyPage msg="There is nothing in playlist" />
      )}
    </>
  );
};

export default Playlist;
