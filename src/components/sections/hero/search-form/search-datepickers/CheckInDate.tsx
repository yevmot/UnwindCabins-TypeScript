import { JSX } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import { setCheckInDate } from '../../../../../store/reducers/dateSlice';
import BasicDatePicker from '../../../../datePicker/BasicDatePicker';
import calendarIcon from './../../../../../img/icons/calendar.svg';

export default function CheckInDate(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const selectedDate = useSelector((state: RootState) => state.date.checkInDate);
  const checkOutDate = useSelector((state: RootState) => state.date.checkOutDate);

  return (
    <BasicDatePicker
      minDate={new Date()}
      maxDate={checkOutDate ? new Date(checkOutDate) : undefined}
      value={selectedDate ? new Date(selectedDate) : null}
      onChange={(date): void => {
        if (date) {
          dispatch(setCheckInDate(date.toISOString()));
        }
      }}
      src={calendarIcon}
      text='Check In'
    />
  );
}
