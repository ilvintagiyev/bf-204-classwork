import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


function MainLayouts() {
  return (
    <>
     <Navbar></Navbar>
     <Outlet/>
    </>
  );
}

export default MainLayouts;
