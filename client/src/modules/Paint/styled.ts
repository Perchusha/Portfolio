import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  height: 80vh;
  border: 0.1vmin solid ${({ theme }) => theme.border};

  svg {
    background: ${({ theme }) => `${theme.background}50`};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.3vmin;
    cursor: pointer;
    border: 0.1vmin solid ${({ theme }) => theme.background};

    &:not(:last-child) {
      margin-right: 0.5vmin;
    }
  }
`;

export const ToolBar = styled.div`
  height: 4vmin;
  background: ${({ theme }) => theme.backgroundLight};
  padding: 0 2vmin;
  border-bottom: 0.1vmin solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const CanvasContainer = styled.div`
  height: calc(100% - 4vmin);
  position: relative;
  overflow: hidden;
`;
