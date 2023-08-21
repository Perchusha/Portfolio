import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.bottomBarHeight};
  align-items: center;
  border-top: 0.1vmin solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: end;
  padding: 0 2vmin;
  background: ${({ theme }) => theme.background};

  & button:not(:last-child) {
    margin-right: 2vmin;
  }
`;
