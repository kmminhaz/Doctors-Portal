import React from 'react';
import Chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content sm:flex-col lg:flex-row-reverse">
          <img
            src={Chair}
            className="max-w-xl rounded-xl shadow-2xl shadow-sm shadow-md"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6 pr-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="text-white text-bold btn bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;