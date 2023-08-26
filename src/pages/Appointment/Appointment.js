import React, { useState } from 'react';
import Calender from './Calender/Calender';
import AvailableAppointments from './AvailableAppointment/AvailableAppointments';
import { format } from "date-fns";

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
      <div>
        <Calender date={date} setDate={setDate}></Calender>
        <AvailableAppointments date={format(date,'PP')}></AvailableAppointments>
      </div>
    );
};

export default Appointment;