import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-context";

const PlaylistContext = createContext();

const PlaylistContextProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const { auth } = useAuth();

  const customHeader = { headers: { authorization: auth.token } };

  useEffect(() => {
    if (auth.loginStatus) {
      (async () => {
        try {
          const response = await axios.get("/api/user/playlists", customHeader);
          setPlaylist(response.data.playlists);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setPlaylist([]);
    }
  }, [auth]);

  const createPlaylist = async (playlistName) => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist: { title: playlistName } },
        customHeader
      );
      setPlaylist(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlaylist = async (playlistId) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}`,
        customHeader
      );
      setPlaylist(response.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const addVideoToPlaylist = async (playlistId, video) => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        customHeader
      );
      setPlaylist((prev) => {
        return prev.map((x) => {
          if (x._id === response.data.playlist._id) {
            return response.data.playlist;
          } else {
            return x;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeVideoFromPlaylist = async (playlistId, videoId) => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
        customHeader
      );
      setPlaylist((prev) => {
        return prev.map((x) => {
          if (x._id === response.data.playlist._id) {
            return response.data.playlist;
          } else {
            return x;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        createPlaylist,
        deletePlaylist,
        addVideoToPlaylist,
        removeVideoFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { usePlaylistContext, PlaylistContextProvider };
