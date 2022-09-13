import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SharedLayout = () => {
  return (
    <div className="App">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default SharedLayout;
