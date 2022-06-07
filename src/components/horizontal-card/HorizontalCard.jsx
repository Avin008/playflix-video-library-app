import "./horizontal-card.css";
import { Link } from "react-router-dom";

const HorizontalCard = ({ videos }) => {
  return (
    <>
      <Link className="links" to={`/watch/${videos._id}`}>
        <div className="horizontal-card">
          <div className="card-head">
            <img src={videos.thumbnail} alt="" />
          </div>
          <div className="card-body">
            <h5 style={{ margin: "0" }}>{videos.title}</h5>
            <small>{videos.channelName}</small>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HorizontalCard;
