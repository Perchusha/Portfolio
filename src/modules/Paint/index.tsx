import { useState, useRef } from 'react';
import { selectTheme } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import {
  BrushIcon,
  CircleIcon,
  EraserIcon,
  PaletteIcon,
  SaveIcon,
  SquareIcon,
  RedoIcon,
  UndoIcon,
  LineIcon,
  Modal,
  Canvas,
  CursorIcon,
} from '../../components';
import { Wrapper, Container, ToolBar, RightPart, CanvasContainer } from './styled';

import TransparentLight from '../../media/transparent-light.png';
import TransparentDark from '../../media/transparent-dark.png';

export const Paint = () => {
  const { key, theme } = useSelector(selectTheme);
  const strokeInputRef = useRef(null);
  const canvasRef = useRef(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const clickHandler = event => {
    const id = event.currentTarget.id;
    switch (id) {
      case 'brush-icon':
        setShowModal(prev => !prev);
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <Container
          style={{ backgroundImage: `url(${key === 'dark' ? TransparentDark : TransparentLight})` }}
        >
          <ToolBar>
            {/* TODO: add tooltips */}
            <CursorIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
            <BrushIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
            <SquareIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
            <CircleIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
            <EraserIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
            <LineIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
            <PaletteIcon onClick={event => clickHandler(event)} color={theme.primaryText} />

            <RightPart>
              <UndoIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
              <RedoIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
              <SaveIcon onClick={event => clickHandler(event)} color={theme.primaryText} />
            </RightPart>
          </ToolBar>
          <CanvasContainer>
            {/* TODO: canvas in progress. Don't forget about drag'n'drop */}
            <Canvas reference={canvasRef} />
          </CanvasContainer>
        </Container>
      </Wrapper>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <input ref={strokeInputRef} type="number" min={0} max={999} />
      </Modal>
    </>
  );
};
