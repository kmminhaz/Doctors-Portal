import React from "react";
import Banner from "./Home/Banner";
import Services from "./Services/Services";
import InfoCard from "./Home/InfoCard/InfoCard";
import DentalCare from "./Services/DentalCare";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <DentalCare></DentalCare>
    </div>
  );
};

export default Home;
