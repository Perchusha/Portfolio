import { Method } from '../types';
import mongoose from 'mongoose';

export const getRequestMeta = (type?: Method, id?: mongoose.Types.ObjectId | null) => {
  return {
    type,
    description: id ? `${type}_USER` : 'GET_ALL_USERS',
    url: `https://portfolio-d745.onrender.com/users${id ? `/${id}` : ''}`,
  };
};
