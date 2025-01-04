import { JSX } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { de } from 'date-fns/locale/de';
import calendar from './../../../../../img/icons/calendar.svg';
import './datePicker.css';

const CalendarImg = (): JSX.Element => {
  return (
    <img src={calendar} alt='img'/>
  );
};

export const DatePickerOut = (): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
      <div className="date-wrapper">
        <DatePicker
          minDate={new Date()}
          label={
            <div className='icon-label'>
              <CalendarImg/>
              <span>Check Out</span>
            </div>
          }
        />
      </div>
    </LocalizationProvider>
  );
};
