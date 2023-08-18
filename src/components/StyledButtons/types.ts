import { ButtonHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';

export type IButtonMode = 'base' | 'success' | 'error';

export interface IStyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: IButtonMode;
  $active?: boolean;
}

export interface INavigatorButtonProps extends LinkProps {
  mode?: IButtonMode;
}
