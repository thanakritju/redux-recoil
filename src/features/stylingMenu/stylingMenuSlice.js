import { createSlice } from '@reduxjs/toolkit';

export const stylingMenuSlice = createSlice({
  name: 'stylingMenu',
  initialState: {
    color: "#704cb6",
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = stylingMenuSlice.actions;

export const selectColor = state => state.stylingMenu.color;

export default stylingMenuSlice.reducer;