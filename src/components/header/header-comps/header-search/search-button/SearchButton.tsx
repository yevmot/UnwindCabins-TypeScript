import BasicButton from '../../../../buttons/BasicButton';
import { JSX } from 'react';

export default function SearchBtn(): JSX.Element {
  return (
    <BasicButton
      onClick={(): void => console.log('Clicked Form Button')}
      variant='contained'
      disabled
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
