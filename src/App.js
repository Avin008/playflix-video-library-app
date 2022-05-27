import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./components";
import { Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<h1>HOMEPAGE</h1>} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
