import styled from 'styled-components';

export const MainFrameContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.mainFrameContainerHeight};
  background-color: ${({ theme }) => theme.backgroundDark};
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSize};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
