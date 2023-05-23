import React from "react";

import Topbar from "../Shared/Topbar";
import DashBoardHome from "./DashBoardHome";
import Chatbot from "./Chatbot";
import { Link, Outlet, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleSignOut = () => {
    signOut(auth);
    console.log("logged out ", user);
  };
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-secondary md:pt-96 md:pb-14">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden md:absolute md:top-0 md:right-0  "
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
              <a onClick={handleSignOut}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
