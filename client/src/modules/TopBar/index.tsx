import { useState } from 'react';
import { NavigateButton } from '../../components';
import { debounce } from '../../utils';
import { Wrapper } from './styled';

export const TopBar = () => {
  return (
    <Wrapper>
      <NavigateButton to={'/welcome'}>Welcome</NavigateButton>
      <NavigateButton to={'/apifetcher'}>API Fetcher</NavigateButton>
      <NavigateButton to={'/calculator'}>Calculator</NavigateButton>
      <NavigateButton to={'/paint'}>Paint</NavigateButton>
    </Wrapper>
  );
};
