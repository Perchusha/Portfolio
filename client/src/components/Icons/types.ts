import React, { KeyboardEvent } from 'react';

export interface IIcon {
  width?: string;
  height?: string;
  color?: string;
  styles?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<SVGElement> | KeyboardEvent) => void;
  tooltip?: string;
}

export interface IHOCIcon extends IIcon {
  ref: React.Ref<SVGSVGElement>;
  // TODO: add commonAttributes type
  commonAttributes: object;
}
