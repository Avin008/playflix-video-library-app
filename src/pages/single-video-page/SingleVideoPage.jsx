import "./single-video-page.css";
import { HorizontalCard, PlaylistModal } from "../../components";
import { useParams } from "react-router-dom";
import { useVideoContext } from "../../context/video-context";
import { WatchLaterIcon, ThumbUpIcon, LibraryAddIcon } from "../../icons/icons";
import { useLikedContext } from "../../context/like-context";
import { useWatchLater } from "../../context/watch-later-context";
import { useState } from "react";
const SingleVideoPage = () => {
  const { videos } = useVideoContext();
  const { videoId } = useParams();
  const getVideo = videos.find((x) => x._id === videoId);
  const { addToLiked } = useLikedContext();
  const { addToWatchLater } = useWatchLater();
  const [toggle, setToggle] = useState(false);

  const togglePlaylist = () => setToggle((prev) => !prev);

  return (
    <div className="container single-video-container">
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
          <div className="single-video-actions">
            <div
              className="chips single-video-action"
              onClick={() => addToLiked(getVideo)}
            >
              <ThumbUpIcon /> <span>Like</span>
            </div>
            <div
              className="chips single-video-action"
              onClick={() => setToggle((prev) => !prev)}
            >
              <LibraryAddIcon /> <span>Save</span>
            </div>
            <div
              className="chips single-video-action"
              onClick={() => addToWatchLater(getVideo)}
            >
              <WatchLaterIcon /> <span>Watch Later</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {videos
          .filter((x) => x._id !== videoId)
          .map((x) => (
            <HorizontalCard key={x._id} videos={x} />
          ))}
      </div>
      {toggle && (
        <PlaylistModal
          data={{ togglePlaylist: togglePlaylist, videos: getVideo }}
        />
      )}
    </div>
  );
};

export default SingleVideoPage;
