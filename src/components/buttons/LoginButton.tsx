import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { JSX } from 'react';

export default function LoginButton(): JSX.Element {
  return (
    <IconButton>
      <AccountCircleIcon sx={{ color: '#3f3f3f' }}/>
    </IconButton>
  );
}
