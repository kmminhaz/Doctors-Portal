import React from "react";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Home from "../pages/HomePage/HomePage";
import Footer from "../pages/Shared/Footer/Footer";
import bgFooter from '../assets/images/footer.png'
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      {/* style={{ background: `URL(${bgFooter})` }} */}
    </div>
  );
};
export default Main;
