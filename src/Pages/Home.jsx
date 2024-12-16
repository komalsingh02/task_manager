import React from "react";
import AllTasks from "./AllTasks";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-red-800 ">
        <SideBar />
      </div>
      <div className="bg-blue-900">
        <AllTasks />
      </div>
    </div>
  );
};

export default Home;
