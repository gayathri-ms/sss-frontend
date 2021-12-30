import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import { Link } from "react-router-dom";
import Duedate from "./duedate";

const Home = () => {
  return (
    <div>
      <Duedate />
    </div>
  );
};

export default Home;
