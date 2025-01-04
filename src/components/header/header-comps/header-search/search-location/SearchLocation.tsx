import map from './../../../../../img/icons/map.svg';
import { Box, TextField } from '@mui/material';
import { JSX } from 'react';
import './searchLocation.css';

const MapIcon = ({ label = 'I want to go' }: { label?: string }): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <img src={map} alt="map" />
      <span>{label}</span>
    </Box>
  );
};

const Location = (): JSX.Element => {
  return (
    <div className='search-location'>
      <TextField
        className='TextField'
        label={<MapIcon/>}
        variant="outlined"
      />
    </div>
  );
};

export default Location;
