import { ReactElement } from 'react';
import BasicSelect from '../../../../../components/select/BasicSelect';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { setTravellers } from '../../../../../store/reducers/travellersSlice';
import { travellersIcon } from '../constants/images/travellersIcon';

export const Travellers = (): ReactElement => {
  const dispatch = useDispatch();
  const travellers = useSelector((state: RootState) => state.travellers.travellers);

  const handleChange = (event: SelectChangeEvent): void => {
    const selectedValue = Number(event.target.value);
    dispatch(setTravellers(selectedValue));
  };

  return (
    <BasicSelect
      value={travellers ? travellers.toString() : ''}
      onChange={handleChange}
      label="Travellers"
      options={['1', '2', '3', '4', '5']}
      iconSrc={travellersIcon}
    />
  );
};
