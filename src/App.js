import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RequiredAuth } from "./components";
import {
  Login,
  Signup,
  Home,
  History,
  Liked,
  WatchLater,
  SingleVideoPage,
  Playlist,
  PlaylistVideoPage,
  SharedLayout,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="history"
            element={
              <RequiredAuth>
                <History />
              </RequiredAuth>
            }
          />
          <Route
            path="liked"
            element={
              <RequiredAuth>
                <Liked />
              </RequiredAuth>
            }
          />
          <Route
            path="watch-later"
            element={
              <RequiredAuth>
                <WatchLater />
              </RequiredAuth>
            }
          />
          <Route path="watch/:videoId" element={<SingleVideoPage />} />
          <Route
            path="playlist"
            element={
              <RequiredAuth>
                <Playlist />
              </RequiredAuth>
            }
          />
          <Route path="playlist/:playlistId" element={<PlaylistVideoPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
