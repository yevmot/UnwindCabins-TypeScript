import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './reducers/dateSlice';
import travellersSlice from './reducers/travellersSlice';
import locationSlice from './reducers/locationSlice';

const store = configureStore({
  reducer: {
    date: dateSlice,
    travellers: travellersSlice,
    location: locationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
