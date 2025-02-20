import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
    location: string;
}

const initialState: LocationState = {
  location: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
