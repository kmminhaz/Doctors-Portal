import React from "react";
import Clock from "../../../../assets/icons/clock.svg";
import Marker from "../../../../assets/icons/marker.svg";
import Phone from "../../../../assets/icons/phone.svg";
import Info from "./Info";

const InfoCard = () => {
  return (
    <div class="px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm-w-100">
      <Info
        img={Clock}
        bgColor="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
      ></Info>
      <Info img={Marker} bgColor="bg-accent" cardTitle="Visit Our Location"></Info>
      <Info
        img={Phone}
        bgColor="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact Us Now"
      ></Info>
    </div>
  );
};

export default InfoCard;
