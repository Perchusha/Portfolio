import { useRef } from 'react';
import { RequestForm } from './RequestForm';
import { Wrapper, RequestsContainer, Preview } from './styled';

export const APIFetcher = () => {
  const requestPreviewRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <RequestsContainer>
        <RequestForm previewRef={requestPreviewRef} />
        <Preview ref={requestPreviewRef} />
      </RequestsContainer>
      {/* ------ TODO: WEB SOCKET ------ */}
    </Wrapper>
  );
};
