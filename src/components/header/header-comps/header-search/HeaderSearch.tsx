import { JSX } from 'react';
import SearchBtn from './search-button/SearchButton';
import Location from './search-location/SearchLocation';
import BasicSelect from './search-travellers/SearchTravellers';
import CheckInDate from './search-datepickers/CheckInDate';
import CheckOutDate from './search-datepickers/CheckOutDate';
import './headerSearch.css';
// import './headerSearchMedia.css';
import './search-datepickers/datePicker.css';
import calendarIcon from './../../../../img/icons/calendar.svg';

export const HeaderSearch = (): JSX.Element => {
  return (
    <div className="container form-container">
      <div className="form">
        <Location />
        <CheckInDate/>
        <CheckOutDate/>
        <BasicSelect />
        <SearchBtn />
      </div>
    </div>
  );
};
