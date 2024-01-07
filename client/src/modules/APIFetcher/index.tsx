import { useEffect, useRef, useState } from 'react';
import { RequestForm } from './RequestForm';
import { RequestsContainer, RequestsPreview, SocketPreview } from './styled';

export const APIFetcher = () => {
  const requestPreviewRef = useRef<HTMLDivElement>(null);
  const socketPreviewRef = useRef<HTMLDivElement>(null);
  const [socketListening, setSocketListening] = useState<boolean>(false);

  useEffect(() => {
    if (!socketListening && socketPreviewRef && socketPreviewRef.current) {
      const container = socketPreviewRef.current;
      const events = new EventSource(`${process.env.REACT_APP_BACKEND_HOST}/sse`);

      events.onmessage = event => {
        const data = JSON.parse(event.data);
        container.innerText = `Last SSE message: \n\n${JSON.stringify(data, null, 4)}`;
      };

      setSocketListening(true);
    }
  }, [socketListening]);

  return (
    <>
      <RequestsContainer>
        <RequestForm previewRef={requestPreviewRef} />
        <RequestsPreview ref={requestPreviewRef} />
      </RequestsContainer>
      <RequestsContainer>
        <SocketPreview ref={socketPreviewRef} />
      </RequestsContainer>
    </>
  );
};
