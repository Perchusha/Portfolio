import { useEffect, useRef } from 'react';
import { IModal } from './types';
import { Wrapper, ModalContainer } from './styled';

export const Modal = ({
  children,
  show,
  onOpen = () => {},
  onClose = () => {},
  styles,
}: IModal) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) onOpen();
  }, [show]);

  const closeHandler = event => {
    if (event.target === modalRef.current) onClose();
  };

  return show ? (
    <Wrapper ref={modalRef} onClick={closeHandler}>
      <ModalContainer style={styles}>{children}</ModalContainer>
    </Wrapper>
  ) : null;
};
