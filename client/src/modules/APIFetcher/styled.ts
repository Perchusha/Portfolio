import styled from 'styled-components';
import { MainFrameContainer } from '../../styled';

export const Wrapper = styled(MainFrameContainer)``;

export const RequestsContainer = styled.div`
  background: ${({ theme }) => theme.backgroundLight};
  padding: 2vmin 4vmin;
  border: 0.1vmin solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 75%;
  height: 35vmin;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 2vmin;
  }

  & > :not(:last-child) {
    margin-right: 4vmin;
  }
`;

export const RequestsPreview = styled.div`
  width: 60%;
  height: 100%;
  background: white;
  overflow-y: auto;
  padding: 0.5vmin 1vmin;
  font-size: 1.5vmin;
  white-space: pre;
  border: 0.1vmin solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: black;
`;

export const SocketPreview = styled(RequestsPreview)`
  width: 100%;
  font-size: 2vmin;
`;
