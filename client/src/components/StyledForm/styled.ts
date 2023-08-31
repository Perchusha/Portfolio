import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & :not(:last-child) {
    margin-bottom: 1vmin;
  }
`;
