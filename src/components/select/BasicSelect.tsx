import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BasicSelectPropsInterface } from './types/BasicSelectProps';
import { basicSelectBoxStyle } from './styles/basicSelectBoxStyle';
import { inputLabelStyle } from './styles/inputLabelStyle';

export default function BasicSelect({
  value,
  onChange,
  label,
  options = [],
  iconSrc,
}: BasicSelectPropsInterface): ReactElement {
  return (
    <Box sx={basicSelectBoxStyle}>
      <FormControl fullWidth>
        <InputLabel
          style={{ color: '#565656', border: 'none' }}
          sx={inputLabelStyle}>
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
          sx={{
            '& .MuiSelect-select': {
              fontFamily: 'Poppins',
            },
          }}
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
