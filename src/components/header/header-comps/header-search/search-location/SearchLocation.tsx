import { JSX } from 'react';
import BasicAutoComplete from '../../../../autoComplete/BasicAutoComplete';
import locationIcon from './../../../../../img/icons/map.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../../../../../store/store';
import { setLocation } from './../../../../../store/reducers/locationSlice';

const locationsArray = [
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
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location.location);

  return (
    <BasicAutoComplete
      options={locationsArray}
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

export default Location;
