import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { IButtonMode } from './types';

const ButtonDefaultCSS = css<{ mode: IButtonMode }>`
  all: unset;
  padding: 0.8vmin 1.6vmin;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  text-align: center;
  height: fit-content;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: 400;

  ${({ mode, theme }) => {
    switch (mode) {
      case 'base':
        return `color: ${theme.primaryText}; background: ${theme.primary};`;
      case 'success':
        return `color: ${theme.successText}; background: ${theme.success};`;
      case 'error':
        return `color: ${theme.dangerText}; background: ${theme.danger};`;
    }
  }}

  &:hover {
    filter: brightness(70%);
  }

  &:focus {
    box-shadow: 0 0 0 0.2vmin ${({ theme }) => theme.focus};
  }

  &:active {
    box-shadow: 0 0 0 0.3vmin ${({ theme }) => theme.active};
  }
`;

export const Button = styled.button<{ mode: IButtonMode; $active: boolean }>`
  ${({ $active }) => {
    return $active ? `filter: brightness(70%) !important;` : '';
  }}
  ${ButtonDefaultCSS}
`;

export const Navigate = styled(Link)<{ mode: IButtonMode }>`
  ${ButtonDefaultCSS}
`;
