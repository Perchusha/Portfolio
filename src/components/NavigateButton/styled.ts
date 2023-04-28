import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  all: unset;
  padding: 1vmin 2vmin;
  border-radius: 0.3vmin;
  cursor: pointer;
  user-select: none;
  color: #2e2e2c;
  background: #57c3fa;

  &:hover {
    background: green;
  }

  &:focus {
    background: red;
  }

  &:active {
    background: blue;
  }
`;
