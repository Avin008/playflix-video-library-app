import "./history-card.css";
import { PlaylistAddIcon } from "../../icons/icons";
import { MoreVertIcon, RemoveCircleIcon } from "../../icons/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "../../context/history-context";

const HistoryCard = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const { removeFromHistory } = useHistory();

  return (
    <>
      <div className="thumbnail-card">
        <div className="card-head">
          <Link to={`/watch/${videos._id}`}>
            <img className="thumbnail" src={videos.thumbnail} alt="not found" />
          </Link>
          {toggle && (
            <ul className="card-actions">
              <li onClick={() => removeFromHistory(videos._id)}>
                <RemoveCircleIcon sx={{ fontSize: "1rem" }} /> Remove from
                History
              </li>
            </ul>
          )}
        </div>
        <div className="card-body">
          <img className="channel-icon" src={videos.channelIcon} alt="#" />
          <div>
            <h5>{videos.title}</h5>
            <small style={{ color: "gray", fontWeight: "bold" }}>
              {videos.channelName}
            </small>
          </div>
          <MoreVertIcon
            sx={{ color: "white", fontSize: "1.3rem", cursor: "pointer" }}
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
