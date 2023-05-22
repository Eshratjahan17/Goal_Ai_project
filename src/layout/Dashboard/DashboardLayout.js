import React from "react";

import Dashboard from "./Dashboard";
import Topbar from "../Shared/Topbar";
import DashBoardHome from "./DashBoardHome";
import Chatbot from "./Chatbot";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-secondary">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-10 w-80 bg-accent text-base-content">
            {/* Sidebar content here */}
            <Topbar></Topbar>
            <li>
              <Link to="/dashboard"> Dashboard </Link>
            </li>
            <li>
              <Link to="/dashboard/chatbot"> Chatbot </Link>
            </li>
            <li>
              <a> Logout </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
