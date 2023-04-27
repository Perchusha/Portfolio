import styled from 'styled-components';

export const Wrapper = styled.div<{ background: string; font: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: ${({ background }) => background};
  color: ${({ font }) => font};
`;
