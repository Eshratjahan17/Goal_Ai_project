import React from "react";
import Loading from "./../Loading";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import avatar from "../../Assets/avatar.jpg";

const Topbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user, user.photoURL);
  return (
    <div className="flex justify-start pt-10 pl-3 pb-3 bg-accent">
      {user ? (
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div>
      ) : (
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
