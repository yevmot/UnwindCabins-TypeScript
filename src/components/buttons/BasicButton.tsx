import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { JSX } from 'react';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  children: React.ReactNode;
  sx?: SxProps;
  href?: string;
  disabled?: boolean;
  icon?: string;
}

export default function BasicButton({
  disabled,
  onClick,
  variant,
  children,
  sx,
  href,
  icon,
}: ButtonProps): JSX.Element {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      href={href}
      sx={{
        'textTransform': 'none',
        'fontFamily': 'Poppins',
        'transition': 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        ...sx,
      }}
    >
      {children}
      {icon}
    </Button>
  );
}
