import { VideoCard } from "../../components";
import { useLikedContext } from "../../context/like-context";
import "./liked.css";
const Liked = () => {
  const { likes } = useLikedContext();
  return (
    <>
      <div className="main-container">
        {likes.map((x) => (
          <VideoCard videos={x} />
        ))}
      </div>
    </>
  );
};

export default Liked;
