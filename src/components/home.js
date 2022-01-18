import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../helper/auth";
import Duedate from "./duedate";

const Home = () => {
  return (
    <div>
      {isAuthenticated() ? (
        <Duedate />
      ) : (
        <div className="text-center mt-5 ">
          <div className="text-center mt-5 h3"> You're not Signned In</div>
          <button className="btn mt-3 my_primary">
            <Link to="/signin">Signin</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
