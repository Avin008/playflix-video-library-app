import { HistoryCard } from "../../components";
import { useHistory } from "../../context/history-context";
import "./history.css";

const History = () => {
  const { history } = useHistory();
  return (
    <>
      <div className="main-container">
        {history.map((x) => (
          <HistoryCard videos={x} />
        ))}
      </div>
    </>
  );
};

export default History;
