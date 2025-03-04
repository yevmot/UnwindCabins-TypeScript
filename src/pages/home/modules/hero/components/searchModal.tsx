import { JSX } from 'react';
import BasicModal from '../../../../../components/modal/BasicModal';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { format } from 'date-fns/format';

export default function SearchModal(): JSX.Element {
  const location = useSelector((state: RootState) => state.location.location);
  const checkInDate = useSelector((state: RootState) => state.date.checkInDate);
  const checkOutDate = useSelector((state: RootState) => state.date.checkOutDate);
  const travellers = useSelector((state: RootState) => state.travellers.travellers);

  const formattedCheckInDate = checkInDate ? format(new Date(checkInDate), 'dd.MM.yyyy') : 'Date not selected';
  const formattedCheckOutDate = checkOutDate ? format(new Date(checkOutDate), 'dd.MM.yyyy') : 'Date not selected';

  const content = [
    `Selected location: ${location}`,
    `Check In: ${formattedCheckInDate}`,
    `Check Out: ${formattedCheckOutDate}`,
    `Number of travellers: ${travellers}`,
  ];

  return (
    <BasicModal
      title='This modal window displays information about your choices.
      The data is derived from Redux and shows the current state of your selections.
      Filtering functionality will be added in the future to make the data easier to work with.'
      content={ content }
    />
  );
}
