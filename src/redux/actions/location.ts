import { createAction } from '@reduxjs/toolkit';

import { ILocation } from '../types';

export const setLocation = createAction<ILocation['location']>('location/SET_DATA');
