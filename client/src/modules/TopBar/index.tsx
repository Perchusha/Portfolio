import { useState } from 'react';
import { NavigateButton } from '../../components';
import { debounce } from '../../utils';
import { Wrapper } from './styled';

export const TopBar = () => {
  const [show, setShow] = useState<boolean>(true);

  const mouseEnterHandler = () => {
    setShow(true);
  };

  const mouseLeaveHandler = () => {
    setShow(false);
  };

  return (
    <Wrapper
      hidden={!show}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={debounce(mouseLeaveHandler, 2000)}
    >
      <NavigateButton to={'/apifetcher'}>API Fetcher</NavigateButton>
      <NavigateButton to={'/calculator'}>Calculator</NavigateButton>
      <NavigateButton to={'/paint'}>Paint</NavigateButton>
      <NavigateButton to={'/inProgress'}>InProgress</NavigateButton>
    </Wrapper>
  );
};
