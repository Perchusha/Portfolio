import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.topBarHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.1vmin solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.background};
  padding: 0 2vmin;

  & a:not(:last-child) {
    margin-right: 2vmin;
  }
`;
