import { JSX, useState } from 'react';
import BasicAutoComplete from '../../../../autoComplete/BasicAutoComplete';
import locationIcon from './../../../../../img/icons/map.svg';

const locations = [
  'Hampshire · England',
  'Lake District · England',
  'Cotswolds · England',
  'Cornwall · England',
  'Yorkshire Dales · England',
  'Peak District · England',
  'Norfolk Broads · England',
  'Isle of Wight · England',
  'Dorset · England',
  'Bath · England',
];

const Location = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <BasicAutoComplete
      options={locations}
      iconSrc={locationIcon}
      label="I want to go"
      value={value}
      onChange={
        (_, newValue): void => {
          setValue(newValue || '');
          console.log(newValue);
        }
      }
    />
  );
};

export default Location;
