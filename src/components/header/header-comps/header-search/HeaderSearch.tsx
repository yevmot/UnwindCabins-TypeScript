// import React, { useState } from "react";

import { JSX } from 'react';
import './headerSearch.css';
import SearchBtn from './search-button/SearchButton';
import Location from './search-location/SearchLocation';
import BasicSelect from './search-travellers/SearchTravellers';
import { DatePickerIn } from './search-datepickers/DatePickerIn';
import { DatePickerOut } from './search-datepickers/DatePickerOut';

export const HeaderSearch = (): JSX.Element => {
//   const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form">
          {/* <FormModal isActive={isActive} setIsActive={setIsActive} /> */}
          <Location />
          <DatePickerIn />
          <DatePickerOut/>
          <BasicSelect />
          <SearchBtn />
        </div>
      </div>
    </div>
  );
};
