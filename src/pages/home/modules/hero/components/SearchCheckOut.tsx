import { ReactElement } from 'react';
import { DatePickerComponent } from '../../../../../components/datePicker/DatePickerComponent';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';
import { setCheckOutDate } from '../../../../../store/reducers/dateSlice';

export const SearchCheckOut = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedDate = useSelector((state: RootState) => state.date.checkOutDate);
  const checkInDate = useSelector((state: RootState) => state.date.checkInDate);

  return (
    <DatePickerComponent
      label='Check Out'
      value={selectedDate ? new Date(selectedDate) : null}
      minDate={checkInDate ? new Date(checkInDate) : new Date()}
      onChange={(date): void => {
        if (date) {
          dispatch(setCheckOutDate(date.toISOString()));
        }
      }
      }
    />
  );
};
