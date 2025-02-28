import { JSX } from 'react';
import SearchBtn from './search-button/SearchButton';
import Location from './search-location/SearchLocation';
import CheckInDate from './search-datepickers/CheckInDate';
import CheckOutDate from './search-datepickers/CheckOutDate';
import BasicSelect from './search-travellers/SearchTravellers';
import './search-datepickers/datePicker.css';
import SearchModal from './search-modal/searchModal';
import './searchForm.css';
// import './headerSearchMedia.css';

export default function HeaderSearch(): JSX.Element {
  return (
    <div className="container form-container" id='search-form'>
      <div className="form">
        <Location />
        <CheckInDate/>
        <CheckOutDate/>
        <BasicSelect />
        <SearchBtn />

        <SearchModal/>
      </div>
    </div>
  );
}
