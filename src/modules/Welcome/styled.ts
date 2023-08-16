import styled from 'styled-components';

export const TitleSpan = styled.span`
  text-align: center;
  font-size: 4vmin;
`;

export const TextSpan = styled.span`
  font-size: 2vmin;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #2e2e2c;
  color: #ffffff;
  padding: 8vmin 12vmin;

  ${TitleSpan}:first-child {
    margin-bottom: 6vmin;
  }
`;
