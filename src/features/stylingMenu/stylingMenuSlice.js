import { createSlice } from '@reduxjs/toolkit';

export const stylingMenuSlice = createSlice({
  name: 'stylingMenu',
  initialState: {
    background: "#000000",
  },
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload;
    },
  },
});

export const { setBackground } = stylingMenuSlice.actions;

export const selectBox = state => state.stylingMenu.background;

export default stylingMenuSlice.reducer;