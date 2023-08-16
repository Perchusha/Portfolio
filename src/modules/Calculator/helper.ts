export const isNumeric = (value: string) => {
  return !isNaN(parseFloat(value));
};

export const isOperation = (value: string) => {
  return value === '+' || value === '-' || value === '*' || value === '/';
};
