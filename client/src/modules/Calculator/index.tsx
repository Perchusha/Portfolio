import React, { useState, useEffect } from 'react';
import { StyledButton } from '../../components';
import { isOperation, isNumeric, DoTheMath } from './helper';
import { operationType, functionalType } from './types';
import { Wrapper, Container, NumPad, CalculatorInput } from './styled';

export const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState<string>('');
  const [memoryNumber, setMemoryNumber] = useState<string>('');
  const [operation, setOperation] = useState<operationType | null>(null);
  const [equalCounter, setEqualCounter] = useState<number>(0);

  const checkKeyboardEvent = (event: KeyboardEvent) => {
    const key: string = event.key;
    if (isNumeric(key)) {
      digitHandler(Number(key));
    } else if (isOperation(key)) {
      operationHandler(key as operationType);
    } else if (key === '=' || key === 'Enter') {
      equalHandler();
    } else if (event.key === 'Backspace') {
      functionalHandler('remove');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', checkKeyboardEvent, false);
    localStorage.setItem('CALC_M', localStorage.getItem('CALC_M') || '0');

    return () => {
      document.removeEventListener('keydown', checkKeyboardEvent, false);
    };
  });

  const digitHandler = (value: number) => {
    if (equalCounter > 0) setEqualCounter(0);

    if (operation && !memoryNumber) {
      setMemoryNumber(currentNumber);
      setCurrentNumber(value.toString());
    } else {
      setCurrentNumber(prev => {
        return prev + value;
      });
    }
  };

  const operationHandler = (value: operationType) => {
    if (notEmpty()) {
      if (operation) setMemoryNumber('');
      setOperation(value);
    }
  };

  const equalHandler = () => {
    if ((memoryNumber || currentNumber) && operation) {
      if (memoryNumber === '') {
        setCurrentNumber(prev => {
          setMemoryNumber(prev);
          return DoTheMath(currentNumber, currentNumber, operation).toString();
        });
      } else {
        setCurrentNumber(prev => {
          if (equalCounter > 0) {
            return DoTheMath(prev, memoryNumber, operation).toString();
          } else {
            setMemoryNumber(prev);
            return DoTheMath(memoryNumber, prev, operation).toString();
          }
        });
      }
      setEqualCounter(prev => {
        return prev + 1;
      });
    }
  };

  const clear = () => {
    setCurrentNumber('');
    setMemoryNumber('');
    setOperation(null);
  };

  const functionalHandler = (key: functionalType) => {
    switch (key) {
      case 'remove': {
        if (currentNumber === '') clear();
        setCurrentNumber(prev => {
          if (prev.length) prev = prev.slice(0, -1);
          return prev;
        });
        break;
      }
      case 'clear': {
        clear();
        break;
      }
      case 'fractional': {
        setCurrentNumber(prev => `${prev}.`);
        break;
      }
      case 'percent': {
        setCurrentNumber(prev => {
          return ((Number(prev) / 100) * Number(memoryNumber || 1)).toString();
        });
        break;
      }
      case 'reverse': {
        if (currentNumber === '0' || currentNumber === '') return;
        setCurrentNumber(prev => {
          return Number(prev) > 0 ? `-${prev}` : Math.abs(Number(prev)).toString();
        });
        break;
      }
    }
  };

  const notEmpty = () => {
    return currentNumber !== '' || memoryNumber !== '' || operation;
  };

  return (
    <Wrapper>
      <Container>
        <CalculatorInput
          type="string"
          value={Number(currentNumber)}
          onChange={event => event.preventDefault()}
        />
        <NumPad>
          <StyledButton onClick={() => functionalHandler('clear')}>
            {notEmpty() ? 'C' : 'AC'}
          </StyledButton>
          <StyledButton onClick={() => functionalHandler('reverse')}>+/-</StyledButton>
          <StyledButton onClick={() => functionalHandler('percent')}>%</StyledButton>
          <StyledButton onClick={() => functionalHandler('remove')}>{'<'}</StyledButton>

          <StyledButton onClick={() => digitHandler(1)}>1</StyledButton>
          <StyledButton onClick={() => digitHandler(2)}>2</StyledButton>
          <StyledButton onClick={() => digitHandler(3)}>3</StyledButton>
          <StyledButton onClick={() => operationHandler('/')}>/</StyledButton>

          <StyledButton onClick={() => digitHandler(4)}>4</StyledButton>
          <StyledButton onClick={() => digitHandler(5)}>5</StyledButton>
          <StyledButton onClick={() => digitHandler(6)}>6</StyledButton>
          <StyledButton onClick={() => operationHandler('*')}>*</StyledButton>

          <StyledButton onClick={() => digitHandler(7)}>7</StyledButton>
          <StyledButton onClick={() => digitHandler(8)}>8</StyledButton>
          <StyledButton onClick={() => digitHandler(9)}>9</StyledButton>
          <StyledButton onClick={() => operationHandler('-')}>-</StyledButton>

          <StyledButton onClick={() => digitHandler(0)}>0</StyledButton>
          <StyledButton value="fractional" onClick={() => functionalHandler('fractional')}>
            .
          </StyledButton>
          <StyledButton onClick={() => operationHandler('+')}>+</StyledButton>

          <StyledButton value="equals" onClick={equalHandler}>
            =
          </StyledButton>
        </NumPad>
      </Container>
    </Wrapper>
  );
};
