import { ReactElement, ReactNode } from 'react';
import { autoCompleteInterface } from '../../types/autoCompleteInterface';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { boxStyle } from './styles/boxStyle';
import { autoCompleteStyle } from './styles/autoCompleteStyle';
import { labelStyle } from './styles/labelStyle';

export const AutoComplete = ({ label, iconSrc, options, onChange }: autoCompleteInterface): ReactElement => {
  return (
    <Box
      sx={boxStyle}>
      <Autocomplete
        fullWidth
        disablePortal
        options={options}
        onChange={onChange}
        sx={autoCompleteStyle}
        renderInput={(params): ReactNode =>
          <TextField
            {...params}
            label={
              <span
                style={labelStyle}>
                {iconSrc && <img src={iconSrc} alt="Icon" style={{ width: 16, height: 16 }} />}
                {label}
              </span>
            }
          />
        }
      />
    </Box>
  );
};
