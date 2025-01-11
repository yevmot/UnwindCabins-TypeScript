import { JSX } from 'react';
import { DatePickerIn } from './DatePickerIn';
import { DatePickerOut } from './DatePickerOut';
import './datePicker.css';

export const DatePickers = (): JSX.Element => {
  return (
    <div className="date-pickers">
      <DatePickerIn/>
      <DatePickerOut/>
    </div>
  );
};
