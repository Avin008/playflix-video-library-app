import { useVideoContext } from "../../context/video-context";
import "./snackbar.css";

const Snackbar = ({ category }) => {
  const { searchFunc, searchKey, setSearchKey } = useVideoContext();

  const categories = [...new Set(category.map((x) => x.category))];

  return (
    <div className="snackbar-container">
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
      {categories.map((x) => (
        <div
          key={x}
          className="chips"
          onClick={() => {
            searchFunc(x);
            setSearchKey(x);
          }}
          style={{ background: searchKey === x ? "green" : "" }}
        >
          {x}
        </div>
      ))}
    </div>
  );
};

export default Snackbar;
