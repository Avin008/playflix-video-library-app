import { useWatchLater } from "../../context/watch-later-context";
import { VideoCard } from "../../components";
import EmptyPage from "../empty-page/EmptyPage";

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
        <EmptyPage msg="There is nothing in Watch Later" />
      )}
    </>
  );
};

export default WatchLater;
