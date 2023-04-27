import { combineReducers } from 'redux';

import { IMainState } from '../types';

import Gender from './gender';
import Location from './location';
export const rootReducer = combineReducers<IMainState>({
  Gender,
  Location,
});
