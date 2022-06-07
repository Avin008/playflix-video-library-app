import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const searchFunc = (searchKey) => {
    const searchVideos = videos.filter((x) =>
      x.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    // if (searchVideos.length === 0) {
    //   setSearchVideos(videos);
    // } else {
    //   setSearchVideos(searchVideos);
    // }

    if (searchKey === "") {
      setSearchVideos(videos);
    } else if (searchVideos.length === 0) {
      setSearchVideos([]);
    } else {
      setSearchVideos(searchVideos);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
        setSearchVideos(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider
      value={{ videos, searchVideos, searchFunc, setSearchKey, searchKey }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideoContext = () => useContext(VideoContext);

export { useVideoContext, VideoContextProvider };
