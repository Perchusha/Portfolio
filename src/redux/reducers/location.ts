import { createReducer } from '@reduxjs/toolkit';
import { ILocation } from '../types';
import { setLocation } from '../actions';

const initialState: ILocation = {
  location: '/hello',
};

export default createReducer(initialState, builder => {
  builder.addCase(setLocation, (state, { payload }) => {
    state.location = payload;
  });
});
