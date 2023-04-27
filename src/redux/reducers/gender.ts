import { createReducer } from '@reduxjs/toolkit';
import { IGender } from '../types';
import { setGender } from '../actions';

const initialState: IGender = {
  gender: 'male',
};

export default createReducer(initialState, builder => {
  builder.addCase(setGender, (state, { payload }) => {
    state.gender = payload;
  });
});
