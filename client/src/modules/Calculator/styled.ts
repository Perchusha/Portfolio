import styled from 'styled-components';
import { StyledInput } from '../../components';
import { MainFrameContainer } from '../../styled';

export const Wrapper = styled(MainFrameContainer)``;

export const Container = styled.div`
  width: 40vmin;
  height: 42vmin;
  background: ${({ theme }) => theme.backgroundLight};
  padding: 2vmin 4vmin;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 0.1vmin solid ${({ theme }) => theme.border};
`;

export const CalculatorInput = styled(StyledInput)`
  padding: 1vmin 2vmin;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const NumPad = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.2vmin;
  margin-top: 1vmin;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;

  button {
    width: 100%;
    font-weight: 700;
  }
`;
