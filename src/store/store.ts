import { configureStore } from '@reduxjs/toolkit';
import dateSlice from './reducers/dateSlice';

const store = configureStore({
  reducer: {
    date: dateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
