import { useWatchLater } from "../../context/watch-later-context";
import { VideoCard } from "../../components";
import EmptyList from "../empty-list/EmptyList";

const WatchLater = () => {
  const { watchLater } = useWatchLater();
  return (
    <>
      {watchLater.length > 0 ? (
        <div className="container">
          {watchLater.map((x) => (
            <VideoCard key={x._id} videos={x} />
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

export default WatchLater;
