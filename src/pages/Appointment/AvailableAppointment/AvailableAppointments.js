import React from 'react';
import AvailableAppointment from './AvailableAppointment';

const AvailableAppointments = ({ date }) => {
  const Appoints = [
    {
      _id: 1,
      name: "Teeth Orthodontics",
    },
    {
      _id: 2,
      name: "Cosmetic Dentistry",
    },
    {
      _id: 3,
      name: "Teeth Cleaning",
    },
    {
      _id: 4,
      name: "Cavity Protection",
    },
    {
      _id: 5,
      name: "Pediatric Dental",
    },
    {
      _id: 6,
      name: "Oral Surgery",
    },
  ];
  return (
    <div className="p-10">
      <div className="text-center">
        <p className="text-accent font-bold">Available Services on {date}</p>
        <p className="pb-5 text-gray-500 py-2">Please Select Services</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:py-20 py-10">
        {Appoints.map(apntmnt => (
          <AvailableAppointment
            key={apntmnt._id}
            app={apntmnt}
          ></AvailableAppointment>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;