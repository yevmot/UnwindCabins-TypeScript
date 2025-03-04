import { ReactElement } from 'react';
import SearchBtn from './SearchButton';
import { Location } from './SearchLocation';
import { SearchCheckIn } from './SearchCheckIn';
import { SearchCheckOut } from './SearchCheckOut';
import BasicSelect from './SearchTravellers';
import SearchModal from './searchModal';
import './../styles/datePicker.css';
import './../styles/searchForm.css';
// import './headerSearchMedia.css';

export default function HeaderSearch(): ReactElement {
  return (
    <div className="container form-container">
      <div className="form">
        <Location />
        <SearchCheckIn/>
        <SearchCheckOut/>
        <BasicSelect />
        <SearchBtn />

        <SearchModal/>
      </div>
    </div>
  );
}
