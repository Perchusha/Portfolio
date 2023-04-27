import { IMainState } from '../types';

export const selectGender = (state: IMainState) => state.Gender.gender;
