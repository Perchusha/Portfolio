import styled from 'styled-components';

export const TitleSpan = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.titleSize};
`;

export const TextSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.primaryText};
  padding: 8vmin 12vmin;

  ${TitleSpan}:first-child {
    margin-bottom: 6vmin;
  }
`;
