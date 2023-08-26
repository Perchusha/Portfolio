import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.topBarHeight};
  min-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1vmin solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  padding: 0 2vmin;
  overflow-x: auto;
  overflow-y: hidden;
  color: ${({ theme }) => theme.primaryText};
  font-size: ${({ theme }) => theme.fontSize};
`;

export const Logo = styled(Link)`
  all: unset;
  cursor: pointer;
  padding: 1vmin 2vmin;
  font-weight: 800;
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  & a:not(:last-child) {
    margin-right: 2vmin;
  }
`;
