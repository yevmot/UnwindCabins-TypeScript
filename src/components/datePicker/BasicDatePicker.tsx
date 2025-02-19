import { JSX } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { de } from 'date-fns/locale/de';
import Box from '@mui/material/Box';

interface IIconLabelProps {
    src: string;
    alt?: string;
    text: string;
}

interface IDatePickerProps extends IIconLabelProps {
    value: Date | null;
    onChange: (date: Date | null) => void;
    minDate?: Date;
    maxDate?: Date;
  }

const CalendarLabel = ({ src, alt = 'icon', text }: IIconLabelProps): JSX.Element => {
  return (
    <Box
      sx={{
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'gap': '8px',
        'fontFamily': 'Poppins',
        'fontSize': '16px',
        'color': '#565656',
      }}
    >
      <img src={src} alt={alt}/>
      <span>{text}</span>
    </Box>
  );
};

export default function BasicDatePicker({
  src,
  alt,
  text,
  value,
  onChange,
  minDate = new Date(),
  maxDate,
}: IDatePickerProps): JSX.Element {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
      <DatePicker className='date-picker'
        value={value ?? null}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(date): void => onChange?.(date)}
        label={
          <CalendarLabel src={src} alt={alt} text={text}/>
        }
        sx={{
          'width': '140px',
          'height': '54px',
          'backgroundColor': '#EAEAEA',
          'borderRadius': '4px',
          'fieldset': { border: 'none' },
          '& input': { fontFamily: 'Poppins' },
        }}
      />
    </LocalizationProvider>
  );
}
