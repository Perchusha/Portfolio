import { NavigateButton } from '../../components';
import { Wrapper, Logo, RightPart } from './styled';

export const TopBar = () => {
  return (
    <Wrapper>
      <Logo to={'/welcome'}>Perch.dev</Logo>
      <RightPart>
        <NavigateButton to={'/apifetcher'}>API Fetcher</NavigateButton>
        <NavigateButton to={'/calculator'}>Calculator</NavigateButton>
        <NavigateButton to={'/paint'}>Paint</NavigateButton>
      </RightPart>
    </Wrapper>
  );
};
