import { IStyledButtonProps, INavigatorButtonProps } from './types';
import { Button, Navigate } from './styled';

export const StyledButton = ({
  children,
  mode = 'base',
  $active = false,
  ...props
}: IStyledButtonProps) => {
  return (
    <Button $active={$active} mode={mode} {...props}>
      {children}
    </Button>
  );
};

export const NavigateButton = ({ children, mode = 'base', ...props }: INavigatorButtonProps) => {
  return (
    <Navigate mode={mode} {...props}>
      {children}
    </Navigate>
  );
};
