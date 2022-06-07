import "./single-video-page.css";
import { HorizontalCard } from "../../components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useParams } from "react-router-dom";
import { useVideoContext } from "../../context/video-context";

const SingleVideoPage = () => {
  const { videos } = useVideoContext();
  const { videoId } = useParams();
  const getVideo = videos.find((x) => x._id === videoId);

  return (
    <div className="main-container single-video-container">
      <div>
        <iframe
          width="550"
          height="315"
          src={getVideo.videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
        <div>
          <h4 style={{ color: "white" }}>{getVideo.title}</h4>
          <div style={{ color: "white", display: "flex", gap: "1rem" }}>
            <ThumbUpIcon />
            <LibraryAddIcon />
            <WatchLaterIcon />
          </div>
        </div>
      </div>
      <div>
        {videos
          .filter((x) => x._id !== videoId)
          .map((x) => (
            <HorizontalCard videos={x} />
          ))}
      </div>
    </div>
  );
};

export default SingleVideoPage;
