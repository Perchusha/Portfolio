import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/theme';

const reducers = {
  Theme: themeReducer,
};

const store = configureStore({
  reducer: reducers,
});

export default store;
