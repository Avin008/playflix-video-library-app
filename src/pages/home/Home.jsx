import { Snackbar, VideoCard } from "../../components";
import { useVideoContext } from "../../context/video-context";

import "./home.css";
const Home = () => {
  const { searchVideos, videos } = useVideoContext();
  return (
    <>
      <div className="main-container">
        <Snackbar category={videos} />
        <div className="container">
          {searchVideos.map((video) => (
            <VideoCard videos={video} key={video._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
