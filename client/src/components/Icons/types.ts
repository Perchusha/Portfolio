import React from 'react';

export interface IIcon {
  width?: string;
  height?: string;
  color?: string;
  styles?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  tooltip?: string;
}
