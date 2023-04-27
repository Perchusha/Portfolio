import { IMainState } from '../types';

export const selectLocation = (state: IMainState) => state.Location.location;
