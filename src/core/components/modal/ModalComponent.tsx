import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';
import { closeModal } from '../../../store/reducers/modalSlice';
import { modalPropsInterface } from '../../types/modalPropsInterface';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Fade } from '@mui/material';
import { modalBoxStyle } from './styles/modalBoxStyle';
import { iconButtonStyle } from './styles/IconButtonStyle';

export const ModalComponent = ({ children }: modalPropsInterface): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const modalState = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <Box>
      <Modal
        open={modalState}
        onClose={(): void => {
          dispatch(closeModal());
        }}
      >
        <Fade in={modalState}>
          <Box
            sx={modalBoxStyle}
          >
            <IconButton
              sx={iconButtonStyle}
              onClick={(): void => {
                dispatch(closeModal());
              }}
            >
              <CloseIcon/>
            </IconButton>
            {children}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};
