import { SelectChangeEvent } from '@mui/material';

export interface BasicSelectPropsInterface {
  value?: string | '';
  onChange: (event: SelectChangeEvent) => void;
  label: string;
  options: string[];
  iconSrc?: string;
}
