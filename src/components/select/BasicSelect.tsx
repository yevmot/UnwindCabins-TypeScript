import { JSX } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IBasicSelectProps {
  value?: string | '';
  onChange: (event: SelectChangeEvent) => void;
  label: string;
  options: Array<string>;
  iconSrc?: string;
}

export default function BasicSelect({
  value,
  onChange,
  label,
  options = [],
  iconSrc,
}: IBasicSelectProps): JSX.Element {
  return (
    <Box sx={{
      minWidth: '140px',
      backgroundColor: '#EAEAEA',
      height: '54px',
      borderRadius: '4px',
    }}>
      <FormControl fullWidth>
        <InputLabel
          style={{ color: '#565656' }}
          sx={{
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'fontFamily': 'Poppins',
            'fontSize': '16px',
          }}>
          {iconSrc && (
            <img
              src={iconSrc}
              alt="Icon"
              style={{ marginRight: 12, width: 16, height: 16 }}
            />
          )}
          {label}
        </InputLabel>
        <Select
          value={value}
          label={label}
          onChange={onChange}
          IconComponent={(): null => null}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
