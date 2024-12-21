// import React, { useState } from "react";

// import Location from "./location/Location";
// import Travellers from "./travellers/Travellers";
// import FormBtn from "./button/FormBtn";
// import DatePickers from "./datepicker/DatePickers";
// import FormModal from "./../../../modals/FormModal";

import { JSX } from 'react';
import './headerSearch.css';

export const HeaderSearch = (): JSX.Element => {
//   const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form">
          {/* <FormModal isActive={isActive} setIsActive={setIsActive} /> */}
          {/* <Location /> */}
          {/* <DatePickers /> */}
          {/* <Travellers /> */}
          {/* <FormBtn setIsActive={setIsActive} /> */}
        </div>
      </div>
    </div>
  );
};
