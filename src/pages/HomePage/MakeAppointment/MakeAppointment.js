import React from 'react';
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
    return (
      <div className='my-20'>
        <div
          style={{ background: `URL(${appointment})` }}
           className="hero"
        >
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:mx-6 hidden lg:block md:block">
              <img
                src={doctor}
                className="max-w-xl rounded-lg mt-[-100px]"
              />
            </div>
            <div className="max-w-lg lg:mx-6 text-white">
              <h1 className="text-2xl font-bold py-5">Appointment</h1>
              <h1 className="text-4xl font-bold">Make an appointment today</h1>
              <p className="py-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MakeAppointment;