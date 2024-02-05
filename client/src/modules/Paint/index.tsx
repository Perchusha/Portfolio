import React, { useState, useRef, useEffect } from 'react';
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
  StyledInput,
} from '../../components';
import { IMouseMode } from './types';
import { Container, ToolBar, RightPart, CanvasContainer } from './styled';

import TransparentLight from '../../assets/transparent-light.png';
import TransparentDark from '../../assets/transparent-dark.png';

export const Paint = () => {
  const { key, theme } = useSelector(selectTheme);
  const strokeInputRef = useRef(null);
  const canvasRef = useRef(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [strokeWidth, setStokeWidth] = useState<number>(1);
  const [mouseMode, setMouseMode] = useState<IMouseMode>('pointer');

  const clickHandler = (event: React.MouseEvent | React.KeyboardEvent) => {
    const id = event.currentTarget.id;
    switch (id) {
      case 'cursor-icon':
        setMouseMode('pointer');
        break;
      case 'brush-icon':
        setMouseMode('brush');
        setShowModal(prev => !prev);
        break;
      case 'square-icon':
        setMouseMode('square');
        break;
      case 'circle-icon':
        setMouseMode('circle');
        break;
      case 'eraser-icon':
        setMouseMode('eraser');
        break;
      case 'line-icon':
        setMouseMode('line');
        break;
      case 'palette-icon':
        setMouseMode('pointer');
        break;
      case 'undo-icon':
        break;
      case 'redo-icon':
        break;
      case 'save-icon':
        break;
    }
  };

  useEffect(() => {
    if (mouseMode === 'pointer') {
    }
  }, [mouseMode]);

  return (
    <>
      <Container
        style={{ backgroundImage: `url(${key === 'dark' ? TransparentDark : TransparentLight})` }}
      >
        <ToolBar>
          <CursorIcon
            onClick={event => clickHandler(event)}
            color={theme.primaryTextColor}
            tooltip="Cursor"
          />
          <BrushIcon
            onClick={event => clickHandler(event)}
            color={theme.primaryTextColor}
            tooltip={'Brush'}
          />
          <SquareIcon
            onClick={event => clickHandler(event)}
            color={theme.primaryTextColor}
            tooltip={'Square'}
          />
          <CircleIcon
            onClick={event => clickHandler(event)}
            color={theme.primaryTextColor}
            tooltip={'Circle'}
          />
          <EraserIcon
            onClick={event => clickHandler(event)}
            color={theme.primaryTextColor}
            tooltip={'Eraser'}
          />
          <LineIcon
            onClick={event => clickHandler(event)}
            color={theme.primaryTextColor}
            tooltip={'Line'}
          />
          <PaletteIcon
            onClick={event => clickHandler(event)}
            color={theme.primaryTextColor}
            tooltip={'Palette'}
          />

          <RightPart>
            <UndoIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryTextColor}
              tooltip={'Undo changes'}
            />
            <RedoIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryTextColor}
              tooltip={'Redo changes'}
            />
            <SaveIcon
              onClick={event => clickHandler(event)}
              color={theme.primaryTextColor}
              tooltip={'Save'}
            />
          </RightPart>
        </ToolBar>
        <ToolBar>
          <div>Stroke width:</div>
          <StyledInput
            name="name"
            type="number"
            value={strokeWidth}
            onChange={e => setStokeWidth(Number(e.target.value))}
            min={1}
            max={10}
          />
        </ToolBar>
        <CanvasContainer>
          <Canvas width={2000} height={2000} mouseMode={mouseMode} reference={canvasRef} />
        </CanvasContainer>
      </Container>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <input ref={strokeInputRef} type="number" min={0} max={999} />
      </Modal>
    </>
  );
};
