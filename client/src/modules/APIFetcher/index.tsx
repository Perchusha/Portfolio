import { useEffect, useRef, useState } from 'react';
import { RequestForm } from './RequestForm';
import { Wrapper, RequestsContainer, RequestsPreview, SocketPreview } from './styled';

export const APIFetcher = () => {
  const requestPreviewRef = useRef<HTMLDivElement>(null);
  const socketPreviewRef = useRef<HTMLDivElement>(null);
  const [socketListening, setSocketListening] = useState<boolean>(false);

  useEffect(() => {
    if (!socketListening && socketPreviewRef && socketPreviewRef.current) {
      const container = socketPreviewRef.current;
      const events = new EventSource('http://localhost:8081/sse');

      events.onmessage = event => {
        const data = JSON.parse(event.data);
        container.innerText = `Last SSE message: \n\n${JSON.stringify(data, null, 4)}`;
      };

      setSocketListening(true);
    }
  }, [socketListening]);

  return (
    <Wrapper>
      <RequestsContainer>
        <RequestForm previewRef={requestPreviewRef} />
        <RequestsPreview ref={requestPreviewRef} />
      </RequestsContainer>
      <RequestsContainer>
        <SocketPreview ref={socketPreviewRef} />
      </RequestsContainer>
    </Wrapper>
  );
};
