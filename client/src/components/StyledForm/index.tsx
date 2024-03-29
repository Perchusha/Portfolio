import { IStyledForm } from './types';
import { Form } from './styled';

export const StyledForm = ({ children, onSubmit, ...props }: IStyledForm) => {
  return (
    <Form {...props} onSubmit={onSubmit}>
      {children}
    </Form>
  );
};
