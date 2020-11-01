import { createSlice } from '@reduxjs/toolkit';

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    width: "800",
    height: "600",
    circles: []
  },
  reducers: {
  },
});

export const selectWidth = state => state.canvas.width;
export const selectHeight = state => state.canvas.height;

export default canvasSlice.reducer;