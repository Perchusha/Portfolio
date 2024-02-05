import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';

import { Wrapper, Text, TextWrapper } from './styled';
import { StyledButton } from '../../components';

export const LifeCycle = () => {
  const [count, setCount] = useState(0);
  console.clear();

  // componentDidMount
  useEffect(() => {
    console.log('Component did mount');
    return () => {
      document.title = 'Portfolio';
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component did update');
    console.log('Count:', count);
  }, [count]);

  // useLayoutEffect для синхронных изменений DOM
  useLayoutEffect(() => {
    console.log('Layout effect');
    // Изменяем заголовок страницы при изменении счетчика
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const squaredCount = useMemo(() => {
    console.log('Calculate squared count');
    return count * count;
  }, [count]);

  console.log('Render');

  return (
    <>
      <TextWrapper>
        <Text>Open Console for more descriptions</Text>
      </TextWrapper>
      <Wrapper>
        <TextWrapper>
          <Text>Count: {count}</Text>
          <Text>SquaredCount: {squaredCount}</Text>
        </TextWrapper>
        <StyledButton onClick={handleClick}>Increment</StyledButton>
      </Wrapper>
    </>
  );
};
