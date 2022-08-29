import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    // state is not mutated directly, toolkit makes it look like that
    increment: state => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: state => {
      state.value = 0;
    },
    decrement: state => {
      state.value -= 1;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// destructuring: attaching name 'increment' to counterSlice.actions increment
export const {
  increment,
  incrementByAmount,
  reset,
  decrement,
  decrementByAmount,
} = counterSlice.actions;
// selector for state for 'value'
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
