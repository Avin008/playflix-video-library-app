import { HistoryCard } from "../../components";
import { useHistory } from "../../context/history-context";
import EmptyList from "../empty-list/EmptyList";
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
        <EmptyList
          img="https://www.youtube.com/img/desktop/unavailable/unavailable_video_dark_theme.png"
          msg="empty history"
        />
      )}
    </>
  );
};

export default History;
