import { Link } from "react-router-dom";

const EmptyList = (props) => {
  return (
    <div className="main-container page-not-found-container">
      <div className="page-not-found">
        <img className="not-found-img" src={props.img} alt={props.msg} />
        <h2 className="not-found-heading">{props.msg}</h2>
      </div>
      <Link className="go-home-btn" to="/">
        GO TO HOME
      </Link>
    </div>
  );
};

export default EmptyList;
