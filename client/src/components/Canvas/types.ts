import React from 'react';
import { IMouseMode } from '../../modules/Paint/types';

export interface ICanvas {
  reference: React.RefObject<HTMLCanvasElement>;
  width: number;
  height: number;
  mouseMode: IMouseMode;
}
