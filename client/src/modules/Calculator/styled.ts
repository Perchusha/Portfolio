import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundDark};
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundLight};
  padding: 2vmin 4vmin;
  border-radius: 1vmin;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 0.1vmin solid ${({ theme }) => theme.border};
`;

export const StyledInput = styled.input`
  all: unset;
  border-radius: 0.5vmin;
  padding: 1vmin 2vmin;
  width: calc(100% - 6vmin);
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};

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
    text-align: center;
  }
`;
