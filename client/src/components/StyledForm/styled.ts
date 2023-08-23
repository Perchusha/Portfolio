import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & :not(:last-child) {
    margin-bottom: 1vmin;
  }
`;

const inputDefault = css`
  padding: 0.5vmin 1vmin;
  font-family: Manrope, serif;
  font-weight: 700;
  font-style: normal;
  width: 100%;
  background: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.primaryText};
  border: 0.1vmin solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:focus {
    box-shadow: 0 0 0 0.1vmin ${({ theme }) => theme.focus};
  }

  &:active {
    box-shadow: 0 0 0 0.2vmin ${({ theme }) => theme.active};
  }
`;

export const StyledInput = styled.input`
  ${inputDefault}
`;

export const StyledSelect = styled.select`
  ${inputDefault}
`;
