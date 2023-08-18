import { createReducer } from '@reduxjs/toolkit';
import { setTheme } from '../actions';
import { Themes, getRandomTheme } from '../../utils/themes';
import { IThemeInitialState } from '../types';

const initialState: IThemeInitialState = {
  key: 'dark',
  theme: Themes.dark,
};

export default createReducer(initialState, builder => {
  builder.addCase(setTheme, (state, { payload }) => {
    state.key = payload;
    state.theme = payload === 'random' ? getRandomTheme() : Themes[payload];
  });
});
