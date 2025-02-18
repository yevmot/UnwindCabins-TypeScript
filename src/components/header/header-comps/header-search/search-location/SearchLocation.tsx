import BasicTextField from './../../../../textField/BasicTextField';
import locationIcon from './../../../../../img/icons/map.svg';
import { JSX } from 'react';

const Location = (): JSX.Element => {
  return (
    <BasicTextField
      iconSrc={locationIcon}
      label="I want to go"
    />
  );
};

export default Location;
