import { VideoCard } from "../../components";
import { useLikedContext } from "../../context/like-context";

const Liked = () => {
  const { likes } = useLikedContext();
  return (
    <>
      <div className="container">
        {likes.map((video) => (
          <VideoCard key={video._id} videos={video} />
        ))}
      </div>
    </>
  );
};

export default Liked;
