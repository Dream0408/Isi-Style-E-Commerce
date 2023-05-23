import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Router from "../routers/Router";
import "react-toastify/dist/ReactToastify.css"
import { Outlet } from "react-router";


const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <Navbar />
        <div className="content">
          <Router/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
