import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DateState {
    checkInDate: string | null;
    checkOutDate: string | null;
}

const initialState: DateState = {
  checkInDate: null,
  checkOutDate: null,
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setCheckInDate: (state, action: PayloadAction<string | null>) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action: PayloadAction<string>) => {
      state.checkOutDate = action.payload;
    },
  },
});

export const { setCheckInDate, setCheckOutDate } = dateSlice.actions;
export default dateSlice.reducer;
