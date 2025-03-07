import { ReactElement } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enGB } from 'date-fns/locale';
import Box from '@mui/material/Box';
import { datePickerPropsInterface } from './types/datePickerPropsInterface';
import { datePickerStyle } from './styles/datePickerStyle';
import { boxStyleCalendarLabel } from './styles/boxStyleCalendarLabel';
import { calendarIconSrc } from './constants/calendarIconSrc';

export const DatePickerComponent = ({
  label,
  value,
  onChange,
  minDate,
  maxDate,
}: datePickerPropsInterface): ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>

      <DatePicker className='date-picker'
        format='dd.MM.yyyy'
        value={value ?? null}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(date): void => onChange?.(date)}
        label={
          <Box
            sx={boxStyleCalendarLabel}
          >
            <img src={calendarIconSrc} alt='icon'/>
            <span>{label}</span>
          </Box>
        }
        sx={datePickerStyle}
      />
    </LocalizationProvider>
  );
};
