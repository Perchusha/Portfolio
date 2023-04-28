import { Wrapper } from './styled';
import { NavigateButton } from '../../components';

export const TopBar = () => {
  return (
    <Wrapper>
      <NavigateButton text={'Hello'} path={'/hello'} />
      <NavigateButton text={'InProgress'} path={'/inProgress'} />
    </Wrapper>
  );
};
