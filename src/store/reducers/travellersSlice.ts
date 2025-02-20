import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TravellersState {
    travellers: number | null;
}

const initialState: TravellersState ={
  travellers: null,
};

const travellersSlice = createSlice({
  name: 'travellers',
  initialState,
  reducers: {
    setTravellers: (state, action: PayloadAction<number>) => {
      state.travellers = action.payload;
    },
  },
});

export const { setTravellers } = travellersSlice.actions;
export default travellersSlice.reducer;
