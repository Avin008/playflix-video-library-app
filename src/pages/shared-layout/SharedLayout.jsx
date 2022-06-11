import { Navbar, Sidebar } from "../../components/";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const SharedLayout = () => {
  useEffect(() => {
    document.title = "Playflix";
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid-container">
        <Sidebar />
        <Outlet />
      </div>
      <ToastContainer
        style={{ width: "fit-content" }}
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={true}
        theme="dark"
      />
    </>
  );
};

export default SharedLayout;
