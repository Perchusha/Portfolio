import React, { useEffect, useRef } from 'react';
import { IModal } from './types';
import { Wrapper, ModalContainer } from './styled';

export const Modal = ({
  children,
  show,
  onOpen = () => {},
  onClose = () => {},
  styles,
}: IModal) => {
  // TODO: move MODAL to PORTAL
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) onOpen();
  }, [show]);

  const closeHandler = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) onClose();
  };

  return show ? (
    <Wrapper ref={modalRef} onClick={closeHandler}>
      <ModalContainer style={styles}>{children}</ModalContainer>
    </Wrapper>
  ) : null;
};
