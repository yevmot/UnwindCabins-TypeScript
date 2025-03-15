import { ReactElement } from 'react';
import { ModalComponent } from '../../../../../core/components/modal/ModalComponent';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { format } from 'date-fns/format';
import Box from '@mui/material/Box';
import { searchModalBoxStyle, searchModalBoxTitleStyle } from '../styles/searchModalBoxStyle';

export const SearchModal = (): ReactElement => {
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
    <ModalComponent>
      <Box sx={searchModalBoxStyle}>
        <Box sx={searchModalBoxTitleStyle}>
          Data from Redux Toolkit storage
        </Box>
        <Box>
          {
            content.map((item, index) => (
              <Box key={index}>{item}</Box>
            ))
          }
        </Box>
      </Box>
    </ModalComponent>
  );
};
