import { JSX } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface IBasicTextFieldProps {
  label?: string;
  iconSrc?: string;
}

export default function BasicTextField({ label, iconSrc }: IBasicTextFieldProps): JSX.Element {
  return (
    <Box
      sx={{
        width: '296px',
        height: '54px',
        backgroundColor: '#EAEAEA',
        borderRadius: '4px',
      }}>
      <TextField
        fullWidth
        variant="outlined"
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
        sx={{
          '& fieldset': { border: 'none' },
          '& input': { fontFamily: 'Poppins', fontSize: '20px' },
          '& .MuiInputLabel-root': {
            fontFamily: 'Poppins',
            fontSize: '16px',
          },
        }}
      />
    </Box>
  );
}
