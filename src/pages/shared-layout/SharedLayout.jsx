import { Navbar, Sidebar } from "../../components/";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="grid-container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
