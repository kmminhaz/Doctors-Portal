import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
      <div
        style={{ background: `URL(${appointment})`, backgroundSize: "cover" }}
        className="my-10"
      >
        <div className="hero min-h-screen">
          <div className="card max-w-lg">
            <div className="card-body">
              <div className="my-10 font-bold">
                <p className="text-2xl text-center text-accent py-1">
                  Contuct Us
                </p>
                <h1 className="text-4xl text-center text-white">
                  Stay connected with us
                </h1>
              </div>
              <div className="form-control my-2">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="text"
                  placeholder="Your message"
                  className="input input-bordered input-lg"
                />
              </div>
              <div className="mt-6 text-center ">
                <button className="btn btn-primary text-white px-14">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;