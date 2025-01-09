import { JSX } from 'react';
import SearchBtn from './search-button/SearchButton';
import Location from './search-location/SearchLocation';
import BasicSelect from './search-travellers/SearchTravellers';
import { DatePickers } from './search-datepickers/DatePickers';
import './headerSearch.css';
import './headerSearchMedia.css';

export const HeaderSearch = (): JSX.Element => {
  return (
    <div className="container form-container">
      {/* <div className="form-container"> */}
      <div className="form">
        <Location />
        <DatePickers />
        <BasicSelect />
        <SearchBtn />
      </div>
      {/* </div> */}
    </div>
  );
};
