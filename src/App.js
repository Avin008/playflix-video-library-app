import { Route, Routes } from "react-router-dom";
import "./App.css";
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
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="liked" element={<Liked />} />
          <Route path="watch-later" element={<WatchLater />} />
          <Route path="watch/:videoId" element={<SingleVideoPage />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="playlist/:playlistId" element={<PlaylistVideoPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
