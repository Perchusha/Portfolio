import React from 'react';

export interface IIcon {
  width?: string;
  height?: string;
  color?: string;
  styles?: React.CSSProperties;
  onClick?: (args) => void;
  tooltip?: string;
}
