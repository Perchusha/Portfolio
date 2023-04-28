import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { IButtonMode } from './types';

const ButtonDefaultCSS = css<{ mode: IButtonMode }>`
  all: unset;
  padding: 1vmin 2vmin;
  border-radius: 0.3vmin;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;

  ${({ mode }) => {
    switch (mode) {
      case 'base':
        return 'color: #2e2e2c; background: #57c3fa;';
      case 'success':
        return 'color: #73BB54; background: #73BB5410;';
      case 'error':
        return 'color: #ff5151; background: #ff515110;';
    }
  }}

  &:hover {
    filter: brightness(70%);
  }

  &:focus {
    box-shadow: 0 0 0 0.2vmin rgba(255, 255, 255, 0.5);
  }

  &:active {
    box-shadow: 0 0 0 0.3vmin rgba(255, 255, 255, 0.5);
  }
`;

export const Button = styled.button<{ mode: IButtonMode }>`
  ${ButtonDefaultCSS}
`;

export const Navigate = styled(Link)<{ mode: IButtonMode }>`
  ${ButtonDefaultCSS}
`;
