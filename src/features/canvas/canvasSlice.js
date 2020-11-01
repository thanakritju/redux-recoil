import { createSlice } from '@reduxjs/toolkit';

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState: {
    width: "800",
    height: "600",
    circles: [
      {x: 200, y: 300},
      {x: 100, y: 500},
      {x: 600, y: 200},
      {x: 400, y: 400},
    ]
  },
  reducers: {
    addCircle: (state, action) => {
      state.circles.push(action.payload);
    },
  },
});

export const { addCircle } = canvasSlice.actions;

export const selectWidth = state => state.canvas.width;
export const selectHeight = state => state.canvas.height;
export const selectCircles = state => state.canvas.circles;

export default canvasSlice.reducer;