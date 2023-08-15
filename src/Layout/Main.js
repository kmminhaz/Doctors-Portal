import React from "react";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Home from "../pages/HomePage/HomePage";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
