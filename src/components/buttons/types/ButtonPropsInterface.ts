import { SxProps } from '@mui/system';

export interface ButtonPropsInterface {
  variant?: 'contained' ;
  children: React.ReactNode;
  sx?: SxProps;
  href?: string;
  disabled?: boolean;
  icon?: string;
  onClick?: () => void;
}
