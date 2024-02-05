import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 120vmin;
  height: 60vmin;
  background: ${({ theme }) => `${theme.background}`};
  border: 0.1vmin solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
    width: 20vmin;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2vmin;
  text-align: center;
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSize};
  color: ${({ theme: e }) => e.primaryTextColor};
`;
