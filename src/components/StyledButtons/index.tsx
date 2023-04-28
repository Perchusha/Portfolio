import { IStyledButtonProps, INavigatorButtonProps } from './types';
import { Button, Navigate } from './styled';

export const StyledButton = ({ children, mode = 'base', ...props }: IStyledButtonProps) => {
  return (
    <Button mode={mode} {...props}>
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
