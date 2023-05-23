import React from "react";
import android from "../../Assets/android.png";
import apple from "../../Assets/apple.png";
import windows from "../../Assets/windows.png";
import bug from "../../Assets/bug.png";
import Barchart from "./Barchart";
import CircleChart from "./CircleChart";

const DashBoardHome = () => {
  return (
    <div>
      <div className="flex md:flex-wrap sm:flex-wrap lg:flex-nowrap">
        <div className="bg-accent w-80 h-56 mx-3 pt-5 rounded-xl">
          <img className=" w-20 h-20 mx-auto my-3" src={android}></img>
          <h1 className="text-4xl font-bold text-center text-blue-900 ">
            714k
          </h1>
          <p className=" text-center ">Weekly Sales</p>
        </div>
        <div className="bg-neutral w-80 h-56 mx-3 pt-5 rounded-xl">
          <img className=" w-20 h-20 mx-auto my-3" src={apple}></img>
          <h1 className="text-4xl font-bold text-center  text-blue-900">
            1.35m
          </h1>
          <p className=" text-center ">New Users</p>
        </div>
        <div className="bg-info w-80 h-56 mx-3 pt-5 rounded-xl">
          <img className=" w-20 h-20 mx-auto my-3" src={windows}></img>
          <h1 className="text-4xl font-bold text-center text-yellow-700">
            1.72m
          </h1>
          <p className=" text-center ">Item Orders</p>
        </div>
        <div className="bg-success w-80 h-56 mx-3 pt-5 rounded-xl">
          <img className=" w-20 h-20 mx-auto my-3" src={bug}></img>
          <h1 className="text-4xl font-bold text-center  text-red-700">234</h1>
          <p className=" text-center ">Bug Reports</p>
        </div>
      </div>
      <div className="flex md:flex-wrap sm:flex-wrap lg:flex-nowrap py-7  mx-3">
        <div className="bg-white shadow-lg p-6 mr-4  rounded-xl ">
          <h1 className="text-lg font-bold ">Website Visits</h1>
          <p className="pb-5">(+43%) than last year</p>
          <Barchart></Barchart>
        </div>
        <div className="bg-white shadow-lg p-6  rounded-xl w-96 ">
          <h1 className="text-lg font-bold ">Current Visits</h1>
          <CircleChart></CircleChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
