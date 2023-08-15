import React from "react";

const Info = ({ img, cardTitle, bgColor }) => {
  return (
    <div className={`card w-100 text-primary-content ${bgColor}`}>
      <div className="card-body grid grid-flow-col">
        <img
          src={img}
          className="max-w-sm max-h-sm rounded-xl sm:grid-cols-1"
        />
        <div className="ps-3 text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>Est diam kasd lorem sit sit justo, et et sea.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
