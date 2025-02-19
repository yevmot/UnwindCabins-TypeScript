import { JSX, useState } from 'react';
import BasicDatePicker from '../../../../datePicker/BasicDatePicker';
import calendarIcon from './../../../../../img/icons/calendar.svg';

export default function CheckOutDate(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <BasicDatePicker
      value={selectedDate}
      onChange={(date): void => {
        setSelectedDate(date);
        console.log('Check Out date: ', date);
      }
      }
      src={calendarIcon}
      text='Check Out'
    />
  );
}
