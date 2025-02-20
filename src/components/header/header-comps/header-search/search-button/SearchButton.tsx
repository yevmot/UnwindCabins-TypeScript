import BasicButton from '../../../../buttons/BasicButton';
import { JSX } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';

export default function SearchBtn(): JSX.Element {
  const location = useSelector((state: RootState) => state.location.location);
  const checkInDate = useSelector((state: RootState) => state.date.checkInDate);
  const checkOutDate = useSelector((state: RootState) => state.date.checkOutDate);
  const travellers = useSelector((state: RootState) => state.travellers.travellers);

  const isButtonDisabled = !(location && checkInDate && checkOutDate && travellers);

  return (
    <BasicButton
      onClick={(): void => console.log('Clicked Form Button')}
      variant='contained'
      disabled = {isButtonDisabled}
      sx={{
        width: '236px',
        height: '54px',
        color: 'white',
        backgroundColor: 'var(--dark-green)',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '28px',
        textTransform: 'none',
      }}
    >
      Find available cabins
    </BasicButton>
  );
}
