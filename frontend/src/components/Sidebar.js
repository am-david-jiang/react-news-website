import { Link, NavLink } from "react-router-dom";

import logo from "../assets/svg/logo.svg";
import home from "../assets/svg/home.svg";
import home_active from "../assets/svg/home-active.svg";
import control_active from "../assets/svg/control-active.svg";
import control from "../assets/svg/control.svg";
import setting from "../assets/svg/setting.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="sidebar-links">
        <div className="sidebar-links-item">
          <NavLink to="/">
            {({ isActive }) => (
              <div>
                <img src={isActive ? home_active : home} alt="Home" />
                <h5 style={{ color: isActive ? "#002446" : "white" }}>Home</h5>
              </div>
            )}
            {/* <img src={home} alt="Home" /> */}
            {/* <h5>Home</h5> */}
          </NavLink>
        </div>
        <div className="sidebar-links-item active">
          <NavLink to="/manage">
            {({ isActive }) => (
              <div>
                <img src={isActive ? control_active : control} alt="Manage" />
                <h5 style={{ color: isActive ? "#002446" : "white" }}>
                  Manage
                </h5>
              </div>
            )}
          </NavLink>
        </div>
      </div>
      <div className="sidebar-setting">
        <a href="/">
          <img src={setting} alt="Setting" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
