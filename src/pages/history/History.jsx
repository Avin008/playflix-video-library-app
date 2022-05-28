import VideoCard from "../../components/video-card/VideoCard";
import { useHistory } from "../../context/history-context";
import "./history.css";

const History = () => {
  const { history } = useHistory();
  return (
    <>
      <div className="main-container">
        {history.map((x) => (
          <VideoCard videos={x} />
        ))}
      </div>
    </>
  );
};

export default History;
