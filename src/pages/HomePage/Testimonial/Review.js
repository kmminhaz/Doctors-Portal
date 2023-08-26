import React from 'react';

const Review = ({ rev }) => {
  return (
    <div className="card w-100 lg:max-w-lg bg-white text-black mt-5 shadow-lg">
      <div className="card-body">
        <p>
          Tempor erat amet ut est invidunt, amet accusam takimata amet takimata
          kasd, kasd nonumy at magna erat rebum et. Nonumy.
        </p>
        <div className="flex p-5 ps-0">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={rev.img} className='' alt="" />
            </div>
          </div>
          <div className="p-5 ">
            <h4>{rev.name}</h4>
            <p>{rev.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;