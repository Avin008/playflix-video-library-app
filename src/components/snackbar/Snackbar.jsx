import { useVideoContext } from "../../context/video-context";
import "./snackbar.css";

const Snackbar = ({ category }) => {
  const { searchFunc, videos, searchKey, setSearchKey } = useVideoContext();

  return (
    <div className="container-x">
      <div
        className="chips"
        onClick={() => {
          searchFunc("");
          setSearchKey("");
        }}
        style={{ background: searchKey === "" ? "green" : "" }}
      >
        All
      </div>
      {category.map((x) => (
        <div
          className="chips"
          onClick={() => {
            searchFunc(x.category);
            setSearchKey(x.category);
          }}
          style={{ background: searchKey === x.category ? "green" : "" }}
        >
          {x.category}
        </div>
      ))}
    </div>
  );
};

export default Snackbar;
