import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  border-bottom: 0.1vmin solid #484846;
  padding: 1vmin 2vmin;
  background: #353533;

  display: flex;
  justify-content: center;

  & a:not(:last-child) {
    margin-right: 2vmin;
  }
`;
