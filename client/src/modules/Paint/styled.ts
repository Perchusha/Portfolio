import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  height: 60vh;
  border: 0.1vmin solid ${({ theme }) => theme.border};
`;

export const ToolBar = styled.div`
  height: 4vmin;
  background: ${({ theme }) => theme.background};
  padding: 0 2vmin;
  border-bottom: 0.1vmin solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;

  svg {
    background: ${({ theme }) => `${theme.background}50`};
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    border: 0.1vmin solid ${({ theme }) => theme.background};
    width: 2.6vmin;
    height: 2.6vmin;
    padding: 0.4vmin;

    &:not(:last-child) {
      margin-right: 0.5vmin;
    }
  }

  input {
    margin-left: 1vmin;
    width: auto;
    padding: 0.2vmin 1vmin;
    text-align: center;
  }
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const CanvasContainer = styled.div`
  height: calc(100% - 8vmin);
  position: relative;
  overflow: hidden;
`;
