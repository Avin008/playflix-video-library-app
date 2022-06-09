import { useWatchLater } from "../../context/watch-later-context";
import { VideoCard } from "../../components";

const WatchLater = () => {
  const { watchLater } = useWatchLater();
  return (
    <>
      <div className="container">
        {watchLater.map((x) => (
          <VideoCard key={x._id} videos={x} />
        ))}
      </div>
    </>
  );
};

export default WatchLater;
