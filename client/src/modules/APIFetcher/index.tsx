import { Wrapper, RequestsContainer, Preview } from './styled';
import { RequestForm } from './RequestForm';
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
      {/* ------ TODO: WEB SOCKET ------ */}
      {/*<RequestsContainer>*/}
      {/*  <WebsocketForm />*/}
      {/*  <Preview />*/}
      {/*</RequestsContainer>*/}
    </Wrapper>
  );
};
