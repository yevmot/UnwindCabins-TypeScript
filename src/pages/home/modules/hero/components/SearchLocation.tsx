import { ReactElement } from 'react';
import { AutoComplete } from '../../../../../core/components/autoComplete/AutoComplete';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { setLocation } from '../../../../../store/reducers/locationSlice';

import { locationData } from './../mock-data/locationData';
import { locationIcon } from '../constants/images/locationIcon';

export const Location = (): ReactElement => {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location.location);

  return (
    <AutoComplete
      options={locationData}
      iconSrc={locationIcon}
      label="I want to go"
      value={location}
      onChange={(_, value): void => {
        if (value) {
          dispatch(setLocation(value));
        }
      }}
    />
  );
};
