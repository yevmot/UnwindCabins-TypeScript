import { JSX, ReactNode } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface IBasicAutoCompleteProps {
  label?: string;
  iconSrc?: string;
  options: string[];
  value: string;
  onChange: (event: React.SyntheticEvent, value: string | null) => void;
}

export default function BasicAutoComplete({ label, iconSrc, options, onChange }: IBasicAutoCompleteProps): JSX.Element {
  return (
    <Box
      sx={{
        width: '296px',
        height: '54px',
        backgroundColor: '#EAEAEA',
        borderRadius: '4px',
      }}>
      <Autocomplete
        fullWidth
        disablePortal
        options={options}
        onChange={onChange}
        sx={{
          '& fieldset': { border: 'none' },
          '& input': { fontFamily: 'Poppins' },
          '& .MuiInputLabel-root': {
            fontFamily: 'Poppins',
            fontSize: '16px',
          },
        }}
        renderInput={(params): ReactNode =>
          <TextField
            {...params}
            label={
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: '#565656',
                }}>
                {iconSrc && <img src={iconSrc} alt="Icon" style={{ width: 16, height: 16 }} />}
                {label}
              </span>
            }
          />
        }
      />
    </Box>
  );
}
