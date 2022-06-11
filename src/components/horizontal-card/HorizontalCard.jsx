import "./horizontal-card.css";
import { Link } from "react-router-dom";

const HorizontalCard = ({ videos }) => {
  return (
    <>
      <Link className="links" to={`/watch/${videos._id}`}>
        <div className="horizontal-card">
          <div className="card-head">
            <img src={videos.thumbnail} alt={videos.title} />
          </div>
          <div className="card-body">
            <h5 className="card-heading">
              {videos.title.length > 40
                ? `${videos.title.substring(0, 50)}...`
                : videos.title}
            </h5>
            <small className="card-sub-heading">{videos.channelName}</small>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HorizontalCard;
