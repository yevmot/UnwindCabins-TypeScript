import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { JSX } from 'react';

interface ButtonProps {
  onClick: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  children: React.ReactNode;
  sx?: SxProps;
  href?: string;
  disabled: boolean;
}

export default function BasicButton({
  disabled,
  onClick,
  variant,
  children,
  sx,
  href,
}: ButtonProps): JSX.Element {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      sx={sx}
      href={href}
    >
      {children}
    </Button>
  );
}
