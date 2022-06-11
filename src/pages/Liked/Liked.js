import { VideoCard } from "../../components";
import { useLikedContext } from "../../context/like-context";
import EmptyPage from "../empty-page/EmptyPage";

const Liked = () => {
  const { likes } = useLikedContext();
  return (
    <>
      {likes.length > 0 ? (
        <div className="container">
          {likes.map((video) => (
            <VideoCard key={video._id} videos={video} />
          ))}
        </div>
      ) : (
        <EmptyPage msg="Looks like you didn't like any video" />
      )}
    </>
  );
};

export default Liked;
