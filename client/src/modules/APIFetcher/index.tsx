import { Wrapper, RequestsContainer, Preview } from './styled';
import { RequestForm } from './RequestForm';
import { WebsocketForm } from './WebsocketForm';
import { useRef } from 'react';

export const APIFetcher = () => {
  const requestPreviewRef = useRef(null);

  return (
    <Wrapper>
      {/* ------ HTTP Requests ------ */}
      <RequestsContainer>
        <RequestForm previewRef={requestPreviewRef} />
        <Preview ref={requestPreviewRef} />
      </RequestsContainer>
      {/* ------ WEB SOCKET ------ */}
      <RequestsContainer>
        <WebsocketForm />
        <Preview />
      </RequestsContainer>
    </Wrapper>
  );
};
