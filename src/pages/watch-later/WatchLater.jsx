import { useWatchLater } from "../../context/watch-later-context";
import "./watch-later.css";
import { VideoCard } from "../../components";

const WatchLater = () => {
  const { watchLater } = useWatchLater();
  return (
    <>
      <div className="main-container">
        {watchLater.map((x) => (
          <VideoCard videos={x} />
        ))}
      </div>
    </>
  );
};

export default WatchLater;
