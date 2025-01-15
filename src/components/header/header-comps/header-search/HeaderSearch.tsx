import { JSX } from 'react';
import SearchBtn from './search-button/SearchButton';
import Location from './search-location/SearchLocation';
import BasicSelect from './search-travellers/SearchTravellers';
import { DatePickers } from './search-datepickers/DatePickers';
import { DatePickerIn } from './search-datepickers/DatePickerIn';
import { DatePickerOut } from './search-datepickers/DatePickerOut';
import './headerSearch.css';
import './headerSearchMedia.css';
import './search-datepickers/datePicker.css';

export const HeaderSearch = (): JSX.Element => {
  return (
    <div className="container form-container">
      {/* <div className="form-container"> */}
      <div className="form">
        <Location />
        <div className="date-pickers">
          <DatePickerIn/>
          <DatePickerOut/>
        </div>
        {/* <DatePickers /> */}
        <BasicSelect />
        <SearchBtn />
      </div>
      {/* </div> */}
    </div>
  );
};
