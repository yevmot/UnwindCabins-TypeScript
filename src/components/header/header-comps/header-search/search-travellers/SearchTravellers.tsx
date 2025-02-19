import { JSX, useState } from 'react';
import BasicSelect from './../../../../select/BasicSelect';
import { SelectChangeEvent } from '@mui/material/Select';
import travellersIcon from './../../../../../img/icons/travellers.svg';

export default function Example(): JSX.Element {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent): void => {
    setValue(event.target.value);
    console.log(`Value of travellers ${event.target.value}`);
  };

  return (
    <BasicSelect
      value={value}
      onChange={handleChange}
      label="Travellers"
      options={['1', '2', '3', '4', '5']}
      iconSrc={travellersIcon}
    />
  );
}
