import React from "react";

const Service = ({ img, cardTitle }) => {
  return (
    <div className="card w-100  shadow-xl my-8">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{cardTitle}</h2>
        <p>
          If a dog chews shoes whose shoes does he choose? If a dog chews shoes
          whose shoes does he choose?
        </p>
      </div>
    </div>
  );
};

export default Service;
