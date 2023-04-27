import { createAction } from '@reduxjs/toolkit';

import { IGender } from '../types';

export const setGender = createAction<IGender['gender']>('gender/SET_DATA');
