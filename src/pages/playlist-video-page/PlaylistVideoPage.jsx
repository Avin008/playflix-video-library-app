import { useParams } from "react-router-dom";
import { PlaylistSingleVideoCard } from "../../components";
import { usePlaylistContext } from "../../context/playlist-context";
const PlaylistVideoPage = () => {
  const { playlistId } = useParams();
  const { playlist } = usePlaylistContext();

  const playlistObj = playlist.find((x) => x._id === playlistId);

  return (
    <div className="container">
      {playlistObj.videos.map((x) => (
        <PlaylistSingleVideoCard
          key={x._id}
          videos={{ video: x, playlistId: playlistObj._id }}
        />
      ))}
    </div>
  );
};

export default PlaylistVideoPage;
