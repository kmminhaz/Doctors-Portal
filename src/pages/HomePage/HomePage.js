import React from "react";
import Banner from "./Home/Banner";
import Services from "./Services/Services";
import InfoCard from "./Home/InfoCard/InfoCard";
import DentalCare from "./Services/DentalCare";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./ContactUs/Contact";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
