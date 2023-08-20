import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  border-top: 0.1vmin solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: end;
  padding: 1vmin 2vmin;
  background: ${({ theme }) => theme.background};

  & button:not(:last-child) {
    margin-right: 2vmin;
  }
`;
