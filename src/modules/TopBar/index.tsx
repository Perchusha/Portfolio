import { Wrapper } from './styled';
import { NavigateButton } from '../../components';

export const TopBar = () => {
  return (
    <Wrapper>
      <NavigateButton to={'/hello'}>Hello</NavigateButton>
      <NavigateButton to={'/inProgress'}>InProgress</NavigateButton>
    </Wrapper>
  );
};
