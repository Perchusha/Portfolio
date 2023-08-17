import { operationType } from './type';

export const isNumeric = (value: string) => {
  return !isNaN(parseFloat(value));
};

export const isOperation = (value: string) => {
  return value === '+' || value === '-' || value === '*' || value === '/';
};

export const DoTheMath = (firstValue: string, secondValue: string, operation: operationType) => {
  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);

  switch (operation) {
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return firstNumber / secondNumber;
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
  }
};
