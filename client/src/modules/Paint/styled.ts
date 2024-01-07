import styled from 'styled-components';
import { MainFrameContainer } from '../../styled';

export const Wrapper = styled(MainFrameContainer)``;

export const Container = styled.div`
  width: 160vmin;
  height: 80vmin;
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
  background: ${({ theme }) => theme.backgroundLight};
  padding: 1vmin 2vmin;
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
  height: calc(100% - 4.1vmin);
  position: relative;
  overflow: hidden;
`;
