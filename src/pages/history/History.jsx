import { HistoryCard } from "../../components";
import { useHistory } from "../../context/history-context";
import EmptyPage from "../empty-page/EmptyPage";
import "./history.css";
const History = () => {
  const { history, removeHistoryAll } = useHistory();

  return (
    <>
      {history.length > 0 ? (
        <div className="main-container">
          <div className="btn-container">
            <button
              className="clear-history-btn"
              onClick={() => removeHistoryAll()}
            >
              Clear History
            </button>
          </div>

          <div className="container">
            {history.map((video) => (
              <HistoryCard key={video._id} videos={video} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyPage msg="You didn't watch anything yet" />
      )}
    </>
  );
};

export default History;
