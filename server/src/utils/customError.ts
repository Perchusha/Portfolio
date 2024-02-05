import HttpStatusCode from '../types/HttpStatusCode';

export interface CustomError extends Error {
  httpCode: HttpStatusCode;
}

export const APIError = (
  name: string,
  httpCode: number = HttpStatusCode.INTERNAL_SERVER,
  message: string = ''
) => {
  const error = new Error() as CustomError;
  error.name = name;
  error.httpCode = httpCode;
  error.message = message;
  return error;
};
