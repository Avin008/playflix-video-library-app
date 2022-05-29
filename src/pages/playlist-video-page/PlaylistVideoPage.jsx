import { useParams } from "react-router-dom";
import { PlaylistSingleVideoCard } from "../../components";
import { usePlaylistContext } from "../../context/playlist-context";
const PlaylistVideoPage = () => {
  const { playlistId } = useParams();
  const { playlist } = usePlaylistContext();

  const videos = playlist.find((x) => x._id === playlistId);

  return (
    <>
      <div className="main-container">
        {videos.videos.map((x) => (
          <PlaylistSingleVideoCard
            videos={{ video: x, playlistId: videos._id }}
          />
        ))}
      </div>
    </>
  );
};

export default PlaylistVideoPage;
