import { Method } from '../types';
import mongoose from 'mongoose';

export const getRequestMeta = (type?: Method, id?: mongoose.Types.ObjectId | null) => {
  return {
    type,
    description: id ? `${type}_USER` : 'GET_ALL_USERS',
    url: `http://localhost:${process.env.PORT || 8081}/users${id ? `/${id}` : ''}`,
  };
};
