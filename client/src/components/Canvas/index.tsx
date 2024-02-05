import { ICanvas } from './types';
import { StyledCanvas } from './styled';
import { useMemo } from 'react';

export const Canvas = ({ reference, width, height, mouseMode }: ICanvas) => {
  const cursorMode = useMemo(() => {
    switch (mouseMode) {
      case 'pointer':
        return 'grab';
      case 'eraser':
        return 'auto';
      case 'brush':
      case 'square':
      case 'circle':
      case 'line':
        return 'crosshair';
    }
  }, [mouseMode]);

  return <StyledCanvas width={width} height={height} ref={reference} mouse={cursorMode} />;
};
