import { ReactElement } from 'react';
import BasicDatePicker from '../../../../../components/datePicker/BasicDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';
import { setCheckOutDate } from '../../../../../store/reducers/dateSlice';

const calendarIcon = './../../../../../img/icons/calendar.svg';

export const SearchCheckOut = (): ReactElement => {
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
        }
      }}
      src={calendarIcon}
      text='Check Out'
    />
  );
};
