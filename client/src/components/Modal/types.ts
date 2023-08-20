import React from 'react';
import { ReactChild } from '../../types';

export interface IModal {
  children: ReactChild;
  show: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  styles?: React.CSSProperties;
}
