import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@app/store/store';
import { closeModal } from './../../store/reducers/modalSlice';

interface BasicModalProps {
    title: string;
    content?: string[];
}

export default function BasicModal({ title, content }: BasicModalProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const modalState = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <div>
      <Modal
        open={modalState}
        onClose={(): void => {
          dispatch(closeModal());
        }}
      >
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            height: 'auto',
            bgcolor: 'background.paper',
            borderRadius: '4px',
            boxShadow: 24,
            p: 5,
          }}>
          <Typography
            variant="h6"
            sx={{
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Poppins',
              marginBottom: '30px',
            }}
          >{title}</Typography>

          <Typography
            sx={{ color: 'black' }}>
            {content ? (
              content.map((item, index) => (
                <div key={index}>{item}</div>
              ))
            ) : (
              <div>No content available</div> // сообщение на случай, если content пустой или не определён
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
