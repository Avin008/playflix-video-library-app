import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "../../context/history-context";
import { MoreVertIcon, RemoveCircleIcon } from "../../icons/icons";

const HistoryCard = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const { removeFromHistory } = useHistory();

  const toggleCardActionsMenu = () => setToggle((prev) => !prev);

  return (
    <>
      <div className="video-card">
        <div className="card-head">
          <Link to={`/watch/${videos._id}`}>
            <img
              className="thumbnail"
              src={videos.thumbnail}
              alt={videos.title}
            />
          </Link>
          {toggle && (
            <ul className="card-actions">
              <li
                className="card-action"
                onClick={() => removeFromHistory(videos._id)}
              >
                <RemoveCircleIcon className="card-icon" /> Remove from History
              </li>
            </ul>
          )}
        </div>
        <div className="card-body">
          <img
            className="channel-icon"
            src={videos.channelIcon}
            alt={videos.channelName}
          />
          <div>
            <h5 className="card-title">{videos.title}</h5>
            <small className="card-sub-heading">{videos.channelName}</small>
          </div>
          <MoreVertIcon
            className="card-options-icon"
            onClick={toggleCardActionsMenu}
          />
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
