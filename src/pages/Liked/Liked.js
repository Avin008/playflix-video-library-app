import { VideoCard } from "../../components";
import { useLikedContext } from "../../context/like-context";
import EmptyList from "../empty-list/EmptyList";

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
        <EmptyList
          img="https://www.youtube.com/img/desktop/unavailable/unavailable_video_dark_theme.png"
          msg="empty history"
        />
      )}
    </>
  );
};

export default Liked;
