import styled from 'styled-components';

export const Wrapper = styled.div<{ background: string, font: string }>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 5vmin;
  background-color: ${({ background }) => background};
  color: ${({ font }) => font};
`;
