import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import stylingMenuReducer from '../features/stylingMenu/stylingMenuSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    stylingMenu: stylingMenuReducer,
  },
});
