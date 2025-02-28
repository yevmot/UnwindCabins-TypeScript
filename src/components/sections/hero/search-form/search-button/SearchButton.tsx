import BasicButton from '../../../../buttons/BasicButton';
import { JSX } from 'react';
import { RootState } from '@app/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../../store/reducers/modalSlice';

export default function SearchBtn(): JSX.Element {
  const dispatch = useDispatch();

  const location = useSelector((state: RootState) => state.location.location);
  const checkInDate = useSelector((state: RootState) => state.date.checkInDate);
  const checkOutDate = useSelector((state: RootState) => state.date.checkOutDate);
  const travellers = useSelector((state: RootState) => state.travellers.travellers);

  const isButtonDisabled = !(location && checkInDate && checkOutDate && travellers);

  return (
    <BasicButton
      onClick={() => dispatch(openModal())}
      variant='contained'
      disabled = {isButtonDisabled}
      sx={{
        width: '236px',
        height: '54px',
        color: 'white',
        backgroundColor: 'var(--dark-green)',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '28px',
      }}
    >
      Find available cabins
    </BasicButton>
  );
}
