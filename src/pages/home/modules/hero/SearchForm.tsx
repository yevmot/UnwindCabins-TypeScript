import { ReactElement } from 'react';
import { SearchButton } from './components/SearchButton';
import { Location } from './components/SearchLocation';
import { SearchCheckIn } from './components/SearchCheckIn';
import { SearchCheckOut } from './components/SearchCheckOut';
import { Travellers } from './components/SearchTravellers';
import { SearchModal } from './components/SearchModal';
import './styles/datePicker.css';
import './styles/searchForm.css';

export const SearchForm = (): ReactElement => {
  return (
    <div className="container form-container">
      <div className="form">
        <Location />
        <SearchCheckIn/>
        <SearchCheckOut/>
        <Travellers />
        <SearchButton />

        <SearchModal/>
      </div>
    </div>
  );
};
