import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TravImg from './../../../../../img/icons/travellers.svg';
import './searchTravellers.css';

export default function BasicSelect(): React.JSX.Element {
  const [count, setCount] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCount(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 140, backgroundColor: '#EAEAEA' }}>
      <FormControl className='formControl' fullWidth>
        <InputLabel
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <img
            src={TravImg}
            alt="Travellers Icon"
            style={{ marginRight: 12, width: 16, height: 16 }}
          />
        Travellers
        </InputLabel>
        <Select
          value={count}
          label="Travellers"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
