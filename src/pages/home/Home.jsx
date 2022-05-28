import { VideoCard } from "../../components";
import { useVideoContext } from "../../context/video-context";
import "./home.css";

const Home = () => {
  const { videos } = useVideoContext();
  return (
    <>
      <div className="main-container">
        {videos.map((x) => (
          <VideoCard videos={x} />
        ))}
      </div>
    </>
  );
};

export default Home;
