import { JSX } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { de } from 'date-fns/locale/de';
import calendar from './../../../../../img/icons/calendar.svg';
import { CalendarLabel } from './CalendarLabel';

export const DatePickerIn = (): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
      <div className="date-wrapper">
        <DatePicker
          minDate={new Date()}
          label={
            <div className='icon-label'>
              <CalendarLabel src={calendar} alt='Calendar Img' text='Check In'/>
            </div>
          }
        />
      </div>
    </LocalizationProvider>
  );
};
