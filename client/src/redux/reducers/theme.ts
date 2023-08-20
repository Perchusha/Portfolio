import { createReducer } from '@reduxjs/toolkit';
import { setTheme } from '../actions';
import { Themes, getRandomTheme } from '../../utils/themes';
import { IThemeInitialState, ITheme } from '../types';

// @ts-ignore
const themeKey: ITheme = localStorage.getItem('theme') || 'dark';

const initialState: IThemeInitialState = {
  key: themeKey,
  theme: themeKey === 'random' ? getRandomTheme() : Themes[themeKey],
};

export default createReducer(initialState, builder => {
  builder.addCase(setTheme, (state, { payload }) => {
    state.key = payload;
    state.theme = payload === 'random' ? getRandomTheme() : Themes[payload];
    localStorage.setItem('theme', payload);
  });
});
