import { ReactElement } from 'react';
import SearchBtn from './components/SearchButton';
import { Location } from './components/SearchLocation';
import { SearchCheckIn } from './components/SearchCheckIn';
import { SearchCheckOut } from './components/SearchCheckOut';
import BasicSelect from './components/SearchTravellers';
import SearchModal from './components/searchModal';
import './styles/datePicker.css';
import './styles/searchForm.css';

export const SearchForm = (): ReactElement => {
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
};
