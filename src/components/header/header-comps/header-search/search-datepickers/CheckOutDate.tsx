import { JSX } from 'react';
import BasicDatePicker from '../../../../datePicker/BasicDatePicker';
import calendarIcon from './../../../../../img/icons/calendar.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';
import { setCheckOutDate } from './../../../../../store/reducers/dateSlice';

export default function CheckOutDate(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const selectedDate = useSelector((state: RootState) => state.date.checkOutDate);
  const checkInDate = useSelector((state: RootState) => state.date.checkInDate);

  return (
    <BasicDatePicker
      minDate={checkInDate ? new Date(checkInDate) : new Date()} // Минимальная дата: checkInDate или сегодня
      value={selectedDate ? new Date(selectedDate) : null}
      onChange={(date): void => {
        if (date) {
          dispatch(setCheckOutDate(date.toISOString())); // Отправляем дату выезда в Redux
          console.log('Check Out date from Redux: ', date.toISOString()); // Выводим в консоль
        }
      }}
      src={calendarIcon}
      text='Check Out'
    />
  );
}
