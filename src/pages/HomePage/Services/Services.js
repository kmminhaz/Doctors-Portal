import React from "react";
import Service from "./Service";
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png"
import Whitening from "../../../assets/images/whitening.png"

const Services = () => {
  return (
    <div className="my-20 px-10">
      <div className="text-center">
        <h3 className="font-bold text-primary">OUR SERVIES</h3>
        <h1 className="my-2 text-2xl">Services We Provide</h1>
      </div>
      <div className="px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm-w-100">
        <Service cardTitle="Fluoride" img={Fluoride}></Service>
        <Service cardTitle="Cavity" img={Cavity}></Service>
        <Service cardTitle="Whitening" img={Whitening}></Service>
      </div>
    </div>
  );
};

export default Services;
