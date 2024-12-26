import { createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import { FC } from 'react';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  children?: React.ReactNode;
}

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#1a3724',
      dark: '#1a3724e5',
    },
  },
});

const BasicButtons: FC<ButtonProps> = ({ onClick, variant = 'contained', children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={onClick} variant={variant}>{children}</Button>
    </ThemeProvider>
  );
};

export default BasicButtons;
