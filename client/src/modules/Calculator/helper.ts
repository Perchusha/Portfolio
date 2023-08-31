import Decimal from 'decimal.js';
import { operationType } from './types';

export const isNumeric = (value: string) => {
  return !isNaN(parseFloat(value));
};

export const isOperation = (value: string) => {
  return value === '+' || value === '-' || value === '*' || value === '/';
};

export const DoTheMath = (firstValue: string, secondValue: string, operation: operationType) => {
  const firstNumber = new Decimal(firstValue);
  const secondNumber = new Decimal(secondValue);

  switch (operation) {
    case '*':
      return firstNumber.mul(secondNumber);
    case '/':
      return firstNumber.div(secondNumber);
    case '+':
      return firstNumber.plus(secondNumber);
    case '-':
      return firstNumber.minus(secondNumber);
  }
};
