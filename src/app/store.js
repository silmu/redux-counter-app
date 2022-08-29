import { configureStore } from '@reduxjs/toolkit';
// Because it's default export we can name differently that counterSlice.reducer
import counterReducer from '../features/counter/CounterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
