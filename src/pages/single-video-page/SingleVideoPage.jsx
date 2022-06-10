import "./single-video-page.css";
import { HorizontalCard, PlaylistModal } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useVideoContext } from "../../context/video-context";
import { WatchLaterIcon, ThumbUpIcon, LibraryAddIcon } from "../../icons/icons";
import { useLikedContext } from "../../context/like-context";
import { useWatchLater } from "../../context/watch-later-context";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
const SingleVideoPage = () => {
  const { videos } = useVideoContext();
  const { videoId } = useParams();
  const { addToLiked, removeFromLiked, likes } = useLikedContext();
  const { addToWatchLater, removeFromWatchLater, watchLater } = useWatchLater();
  const [toggle, setToggle] = useState(false);
  const [video, setVideo] = useState({});
  const { auth } = useAuth();
  const navigate = useNavigate();
  const togglePlaylist = () => setToggle((prev) => !prev);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setVideo(response.data.video);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);

  return (
    <div className="container single-video-container">
      <div>
        <iframe
          width="550"
          height="315"
          src={video.videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
        <div>
          <h4 style={{ color: "white" }}>{video.title}</h4>
          <div className="single-video-actions">
            {likes.find((x) => x._id === video._id) ? (
              <div
                className="chips single-video-action"
                onClick={() =>
                  auth.loginStatus
                    ? removeFromLiked(video._id)
                    : navigate("/login")
                }
              >
                <ThumbUpIcon sx={{ color: "#3EA6FF" }} /> <span>Like</span>
              </div>
            ) : (
              <div
                className="chips single-video-action"
                onClick={() =>
                  auth.loginStatus ? addToLiked(video) : navigate("/login")
                }
              >
                <ThumbUpIcon /> <span>Like</span>
              </div>
            )}
            <div
              className="chips single-video-action"
              onClick={() =>
                auth.loginStatus
                  ? setToggle((prev) => !prev)
                  : navigate("/login")
              }
            >
              <LibraryAddIcon /> <span>Save</span>
            </div>
            {watchLater.find((x) => x._id === video._id) ? (
              <div
                className="chips single-video-action"
                onClick={() =>
                  auth.loginStatus
                    ? removeFromWatchLater(video._id)
                    : navigate("/login")
                }
              >
                <WatchLaterIcon sx={{ color: "#3EA6FF" }} />{" "}
                <span>Watch Later</span>
              </div>
            ) : (
              <div
                className="chips single-video-action"
                onClick={() =>
                  auth.loginStatus ? addToWatchLater(video) : navigate("/login")
                }
              >
                <WatchLaterIcon /> <span>Watch Later</span>
              </div>
            )}
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
          data={{ togglePlaylist: togglePlaylist, videos: video }}
        />
      )}
    </div>
  );
};

export default SingleVideoPage;
