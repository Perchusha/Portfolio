import styled from 'styled-components';

export const StyledCanvas = styled.canvas<{ width: number; height: number; mouse: string }>`
  background: white;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: ${({ mouse }) => mouse};
`;
