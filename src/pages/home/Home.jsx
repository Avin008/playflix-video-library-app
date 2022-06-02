import { VideoCard } from "../../components";
import { useVideoContext } from "../../context/video-context";
import "./home.css";

const Home = () => {
  const { searchVideos } = useVideoContext();
  return (
    <>
      <div className="main-container">
        {searchVideos.map((x) => (
          <VideoCard videos={x} key={x._id} />
        ))}
      </div>
    </>
  );
};

export default Home;
