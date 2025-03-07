import Button from '@mui/material/Button';
import { ReactElement } from 'react';
import { RootState } from '@app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../../store/reducers/modalSlice';
import { searchButtonStyle } from '../styles/searchButtonStyle';

export const SearchButton = (): ReactElement => {
  const dispatch = useDispatch();

  const location = useSelector((state: RootState) => state.location.location);
  const checkInDate = useSelector((state: RootState) => state.date.checkInDate);
  const checkOutDate = useSelector((state: RootState) => state.date.checkOutDate);
  const travellers = useSelector((state: RootState) => state.travellers.travellers);

  const isButtonDisabled = !(location && checkInDate && checkOutDate && travellers);

  return (
    <Button
      onClick={(): void => {
        dispatch(openModal());
      }}
      variant='contained'
      disabled = {isButtonDisabled}
      sx = { searchButtonStyle }
    >
      Find available cabins
    </Button>
  );
};
