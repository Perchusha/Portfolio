import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundDark};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const RequestsContainer = styled.div`
  background: ${({ theme }) => theme.backgroundLight};
  padding: 2vmin 4vmin;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 75%;
  height: 40%;
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
`;

export const SocketPreview = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  overflow-y: auto;
  padding: 0.5vmin 1vmin;
  font-size: 2vmin;
  white-space: pre;
  border: 0.1vmin solid ${({ theme }) => theme.border};
`;
