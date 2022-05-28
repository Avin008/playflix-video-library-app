import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videos }}>{children}</VideoContext.Provider>
  );
};

const useVideoContext = () => useContext(VideoContext);

export { useVideoContext, VideoContextProvider };
