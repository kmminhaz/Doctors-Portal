import React from "react";
import Chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from '../../../assets/images/bg.png'

const Calender = ({date, setDate}) => {
  return (
    <div style={{ background: `URL(${bg})`, backgroundSize: 'cover' }}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Chair}
            className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="lg:mr-16 shadow-lg rounded-xl">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            {/* <p>You have selected : {format(date, "PP")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
