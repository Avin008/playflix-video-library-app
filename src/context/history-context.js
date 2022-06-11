import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./auth-context";

const HistoryContext = createContext();

const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const { auth } = useAuth();

  const customHeader = {
    headers: { authorization: auth.token },
  };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        try {
          const response = await axios.get("/api/user/history", customHeader);
          setHistory(response.data.history);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setHistory([]);
    }
  }, [auth]);

  const addToHistory = async (video) => {
    const isInHistory = history.find((x) => x._id === video._id) ? true : false;
    if (isInHistory) {
      setHistory((prev) => prev);
    } else {
      try {
        const response = await axios.post(
          "/api/user/history",
          { video },
          customHeader
        );
        setHistory(response.data.history);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeFromHistory = async (videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/history/${videoId}`,
        customHeader
      );
      setHistory(response.data.history);
      toast.success("Video Removed from History");
    } catch (error) {
      console.log(error);
    }
  };

  const removeHistoryAll = async () => {
    try {
      const response = await axios.delete(
        "/api/user/history/all",
        customHeader
      );
      setHistory(response.data.history);
      toast.success("History Cleared");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HistoryContext.Provider
      value={{ history, addToHistory, removeFromHistory, removeHistoryAll }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryContextProvider };
