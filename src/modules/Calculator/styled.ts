import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e2e2c;
  color: #ffffff;
`;

export const Container = styled.div`
  background: #484846;
  padding: 2vmin 4vmin;
  border-radius: 1vmin;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  all: unset;
  border-radius: 0.5vmin;
  padding: 1vmin 2vmin;
  width: calc(100% - 6vmin);
  align-items: center;
  background: white;
  color: #2e2e2c;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const NumPad = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 1vmin;

  button {
    margin: 1vmin;
  }
`;
