import { Button } from './styled';

export const NavigateButton = ({ path, text }) => {
  return <Button to={path}>{text}</Button>;
};
