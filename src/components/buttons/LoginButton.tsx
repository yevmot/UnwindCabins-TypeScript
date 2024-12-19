import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { JSX } from 'react';

const Icon = (): JSX.Element => {
  return (
    <IconButton aria-label="icon">
      <AccountCircleIcon sx={{ color: '#3f3f3f' }}/>
    </IconButton>
  );
};

export default Icon;
