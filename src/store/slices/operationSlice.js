import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalOperations: 0,
  sign: '+',
};

export const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {
    changeOperations: (state) => {
      state.totalOperations += 1;
    },
    changeSign: (state, action) => {
      state.sign = action.payload;
    },
    reset: (state) => {
      state.sign = '+';
    },
  },
});

export const { changeOperations, changeSign, reset } = operationSlice.actions;

export default operationSlice.reducer;
