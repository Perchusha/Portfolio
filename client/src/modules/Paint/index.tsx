import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';
import {
  Modal,
  Canvas,
  BrushIcon,
  CircleIcon,
  EraserIcon,
  PaletteIcon,
  SaveIcon,
  SquareIcon,
  RedoIcon,
  UndoIcon,
  LineIcon,
  CursorIcon,
} from '../../components';
import { Wrapper, Container, ToolBar, RightPart, CanvasContainer } from './styled';

import TransparentLight from '../../assets/transparent-light.png';
import TransparentDark from '../../assets/transparent-dark.png';

export const Paint = () => {
  const { key, theme } = useSelector(selectTheme);
  const strokeInputRef = useRef(null);
  const canvasRef = useRef(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const clickHandler = (event: React.MouseEvent | React.KeyboardEvent) => {
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
            <CursorIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryText}
              tooltip="Cursor"
            />
            <BrushIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryText}
              tooltip={'Brush'}
            />
            <SquareIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryText}
              tooltip={'Square'}
            />
            <CircleIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryText}
              tooltip={'Circle'}
            />
            <EraserIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryText}
              tooltip={'Eraser'}
            />
            <LineIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryText}
              tooltip={'Line'}
            />
            <PaletteIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryText}
              tooltip={'Palette'}
            />

            <RightPart>
              <UndoIcon
                onClick={event => clickHandler(event)}
                color={theme.primaryText}
                tooltip={'Undo changes'}
              />
              <RedoIcon
                onClick={event => clickHandler(event)}
                color={theme.primaryText}
                tooltip={'Redo changes'}
              />
              <SaveIcon
                onClick={event => clickHandler(event)}
                color={theme.primaryText}
                tooltip={'Save'}
              />
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
