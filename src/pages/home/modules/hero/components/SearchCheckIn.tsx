import { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import { setCheckInDate } from '../../../../../store/reducers/dateSlice';
import BasicDatePicker from '../../../../../components/datePicker/BasicDatePicker';

const calendarIcon = './../../../../../img/icons/calendar.svg';

export const SearchCheckIn = (): ReactElement => {
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
};
