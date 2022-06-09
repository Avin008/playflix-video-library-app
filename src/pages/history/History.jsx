import { HistoryCard } from "../../components";
import { useHistory } from "../../context/history-context";
import "./history.css";

const History = () => {
  const { history, removeHistoryAll } = useHistory();
  return (
    <div className="main-container">
      {history.length > 0 && (
        <div className="btn-container">
          <button
            className="clear-history-btn"
            onClick={() => removeHistoryAll()}
          >
            Clear History
          </button>
        </div>
      )}

      <div className="container">
        {history.map((video) => (
          <HistoryCard key={video._id} videos={video} />
        ))}
      </div>
    </div>
  );
};

export default History;
