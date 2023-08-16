import styled from 'styled-components';

export const Wrapper = styled.div<{ hidden: boolean }>`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 0;
  display: flex;
  justify-content: center;
  transform: translateX(-50%);
  padding: 1vmin 2vmin;
  border-bottom: 0.1vmin solid #484846;
  background: #353533;

  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  transition: opacity 0.3s;

  & a:not(:last-child) {
    margin-right: 2vmin;
  }
`;
