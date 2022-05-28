import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import { Login, Signup, Home, History, Liked, WatchLater } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="liked" element={<Liked />} />
          <Route path="watch-later" element={<WatchLater />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
