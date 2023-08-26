import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Review',
      address: 'California',
      comment: '',
      img: people1
    },
    {
      _id: 2,
      name: 'Winson Review',
      address: 'California',
      comment: '',
      img: people2
    },
    {
      _id: 3,
      name: 'Winson Review',
      address: 'California',
      comment: '',
      img: people3
    },
  ];
  return (
    <section className="my-28 px-10">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-bold text-primary py-2">Testimonial</h4>
          <h2 className="text-3xl">What our patients say</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm-w-100">
        {
            reviews.map(review => <Review key={review._id} rev={review}></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
