import { createSlice } from '@reduxjs/toolkit';
import { ZODIAC_SIGNS } from '../constants/constants';

const initialState = {
  value: ZODIAC_SIGNS[0],
};

const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setSign: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSign } = signSlice.actions;
export default signSlice.reducer;
