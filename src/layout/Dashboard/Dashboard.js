import React from "react";
import DashboardLayout from "./DashboardLayout";
import DashBoardHome from "./DashBoardHome";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <DashBoardHome></DashBoardHome>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay">
           
          </label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            
            {/* Sidebar content here */}
            <li>
              
              <a> Dashboard </a>
            </li>
            <li>
              <a href="/chatbot"> Chatbot </a>
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

export default Dashboard;
