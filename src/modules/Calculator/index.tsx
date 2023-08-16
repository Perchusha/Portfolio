import { useState, useRef, useEffect } from 'react';
import { Wrapper, Container, NumPad, StyledInput } from './styled';
import { StyledButton } from '../../components';
import { isOperation, isNumeric } from './helper';

export const Calculator = () => {
  const ref = useRef(null);
  const [state, setState] = useState({
    value: null,
    operation: null,
    memory: null,
  });

  const checkKeyboardEvent = event => {
    const key = event.key;
    if (isNumeric(key)) {
      digitHandler(key);
    } else if (isOperation(key)) {
      operationHandler(key);
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

  const digitHandler = value => {
    if (typeof value === 'string') value = Number(value);
    console.log(value);
    setState(prev => {
      prev.value = value;
      return prev;
    });
    if (ref && ref.current) {
      // @ts-ignore
      ref.current.value = (ref.current.value || '') + value;
    }
  };

  const operationHandler = value => {
    console.log(`OperationHandler: ${value}`);
  };
  const equalHandler = () => {
    console.log(`EqualHandler: ${JSON.stringify(state, null, 4)}`);
  };

  const functionalHandler = key => {
    console.log(`FunctionalHandler: ${key}`);
  };

  return (
    <Wrapper>
      <Container>
        <StyledInput
          ref={ref}
          type="number"
          value={Number(state.value) || ''}
          onChange={console.log}
        />
        <NumPad>
          <StyledButton onClick={() => operationHandler('clear')}>AC</StyledButton>
          <StyledButton onClick={() => operationHandler('reverse')}>+/-</StyledButton>
          <StyledButton onClick={() => operationHandler('%')}>%</StyledButton>
          <StyledButton onClick={() => operationHandler('/')}>/</StyledButton>

          <StyledButton onClick={() => digitHandler(1)}>1</StyledButton>
          <StyledButton onClick={() => digitHandler(2)}>2</StyledButton>
          <StyledButton onClick={() => digitHandler(3)}>3</StyledButton>
          <StyledButton onClick={() => operationHandler('*')}>*</StyledButton>

          <StyledButton onClick={() => digitHandler(4)}>4</StyledButton>
          <StyledButton onClick={() => digitHandler(5)}>5</StyledButton>
          <StyledButton onClick={() => digitHandler(6)}>6</StyledButton>
          <StyledButton onClick={() => operationHandler('-')}>-</StyledButton>

          <StyledButton onClick={() => digitHandler(7)}>7</StyledButton>
          <StyledButton onClick={() => digitHandler(8)}>8</StyledButton>
          <StyledButton onClick={() => digitHandler(9)}>9</StyledButton>
          <StyledButton onClick={() => operationHandler('+')}>+</StyledButton>

          <StyledButton onClick={() => digitHandler(0)}>0</StyledButton>
          <StyledButton value="fractional" onClick={() => functionalHandler('fractional')}>
            .
          </StyledButton>
          <StyledButton value="equals" onClick={equalHandler}>
            =
          </StyledButton>
        </NumPad>
      </Container>
    </Wrapper>
  );
};
