import React from 'react';

const AvailableAppointment = ({app}) => {
  return (
    <div>
      <div className="card w-96 bg-white text-accent shadow-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{app.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;