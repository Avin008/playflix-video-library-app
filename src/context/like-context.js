import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-context";

const LikedContext = createContext();

const LikedContextProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const { auth } = useAuth();

  const customHeader = { headers: { authorization: auth.token } };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        try {
          const response = await axios.get("/api/user/likes", customHeader);
          setLikes(response.data.likes);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setLikes([]);
    }
  }, [auth]);

  const addToLiked = async (video) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        customHeader
      );
      setLikes(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromLiked = async (videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/likes/${videoId}`,
        customHeader
      );
      setLikes(response.data.likes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LikedContext.Provider value={{ addToLiked, removeFromLiked, likes }}>
      {children}
    </LikedContext.Provider>
  );
};

const useLikedContext = () => useContext(LikedContext);

export { useLikedContext, LikedContextProvider };
