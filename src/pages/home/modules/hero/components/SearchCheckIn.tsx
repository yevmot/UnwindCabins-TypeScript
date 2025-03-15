import { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import { setCheckInDate } from '../../../../../store/reducers/dateSlice';

import { DatePickerComponent } from '../../../../../core/components/datePicker/DatePickerComponent';

const calendarIcon = '/public/img/icons/calendar.svg';

export const SearchCheckIn = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedDate = useSelector((state: RootState) => state.date.checkInDate);
  const checkOutDate = useSelector((state: RootState) => state.date.checkOutDate);

  return (
    <DatePickerComponent
      label='Check In'
      value={selectedDate ? new Date(selectedDate) : null}
      minDate={new Date()}
      maxDate={checkOutDate ? new Date(checkOutDate) : undefined}
      onChange={(date): void => {
        if (date) {
          dispatch(setCheckInDate(date.toISOString()));
        }
      }}
    />
  );
};
