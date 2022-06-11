import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./auth-context";

const WatchLaterContext = createContext();

const WatchLaterContextProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);
  const { auth } = useAuth();

  const customHeader = { headers: { authorization: auth.token } };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        try {
          const response = await axios.get(
            "/api/user/watchlater",
            customHeader
          );
          setWatchLater(response.data.watchlater);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setWatchLater([]);
    }
  }, [auth]);

  const addToWatchLater = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        customHeader
      );
      setWatchLater(response.data.watchlater);
      toast.success("Video Added to Watch Later");
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchLater = async (videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/watchlater/${videoId}`,
        customHeader
      );
      setWatchLater(response.data.watchlater);
      toast.success("Video Removed From Watch Later");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{ addToWatchLater, removeFromWatchLater, watchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { useWatchLater, WatchLaterContextProvider };
