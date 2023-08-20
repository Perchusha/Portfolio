import { Wrapper, TitleSpan, TextSpan } from './styled';

export const Welcome = () => {
  return (
    <Wrapper>
      <TitleSpan>This is the entry page for this project!</TitleSpan>
      <TextSpan>
        I'm glad you come here. Here I training some functionality. Now available:
      </TextSpan>
      <ul>
        <li>API Fetcher</li>
        <li>Calculator</li>
        <li>Paint (in progress)</li>
      </ul>
    </Wrapper>
  );
};
