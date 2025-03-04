import { ReactElement } from 'react';
import BasicAutoComplete from '../../../../../components/autoComplete/BasicAutoComplete';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { setLocation } from '../../../../../store/reducers/locationSlice';
import { locationData } from './../mock-data/locationData';

import { locationIcon } from '../constants/images/locationIcon';

export const Location = (): ReactElement => {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location.location);

  return (
    <BasicAutoComplete
      options={locationData}
      iconSrc={locationIcon}
      label="I want to go"
      value={location}
      onChange={(_: React.SyntheticEvent<Element, Event>, value: string | null): void => {
        if (value) {
          dispatch(setLocation(value));
        }
      }}
    />
  );
};
