import { createReducer, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { setTheme } from '../actions';
import { Themes, getRandomTheme } from '../../utils';
import { IThemeInitialState, ITheme } from '../types';

const themeKey: ITheme = (localStorage.getItem('theme') as ITheme) || 'dark';
document.documentElement.style.setProperty('color-scheme', themeKey);

const initialState: IThemeInitialState = {
  key: themeKey,
  theme: themeKey === 'random' ? getRandomTheme() : Themes[themeKey],
};

const handler = (builder: ActionReducerMapBuilder<IThemeInitialState>) => {
  builder.addCase(setTheme, (state, { payload }) => {
    state.key = payload;
    state.theme = payload === 'random' ? getRandomTheme() : Themes[payload];
    document.documentElement.style.setProperty('color-scheme', payload);
    localStorage.setItem('theme', payload);
  });
};

export default createReducer(initialState, handler);
