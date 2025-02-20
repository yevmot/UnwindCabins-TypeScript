import { JSX, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from './../../../../../store/store';
import { setCheckInDate } from './../../../../../store/reducers/dateSlice';
import BasicDatePicker from './../../../../datePicker/BasicDatePicker';
import calendarIcon from './../../../../../img/icons/calendar.svg';

export default function CheckInDate(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const selectedDate = useSelector((state: RootState) => state.date.checkInDate);

  return (
    <BasicDatePicker
      minDate={new Date()}
      value={selectedDate ? new Date(selectedDate) : null}
      onChange={(date): void => {
        if (date) {
          dispatch(setCheckInDate(date.toISOString()));
          console.log('Check In date from Redux: ', date.toISOString());
        }
      }}
      src={calendarIcon}
      text='Check In'
    />
  );
}
