import { ICanvas } from './types';
import { StyledCanvas } from './styled';

export const Canvas = ({ reference }: ICanvas) => {
  return <StyledCanvas ref={reference} />;
};
