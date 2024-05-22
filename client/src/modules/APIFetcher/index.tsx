import { useEffect, useRef, useState } from 'react';
import { RequestForm } from './RequestForm';
import { RequestsContainer, RequestsPreview, SocketPreview, WebsocketPreview } from './styled';

export const APIFetcher = () => {
  const requestPreviewRef = useRef<HTMLDivElement>(null);
  const socketPreviewRef = useRef<HTMLDivElement>(null);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
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

  useEffect(() => {
    if (!ws) {
      const socket = new WebSocket('ws://localhost:3001');

      socket.onopen = () => {
        console.log('WebSocket: connection opened');

        socket.send(JSON.stringify({ id: '1' }));
      };

      socket.onmessage = event => {
        console.log('WebSocket: message received');
        const newMessage = JSON.parse(event.data);
        setMessages((prevMessages: string[]) => {
          return [...prevMessages, newMessage];
        });
      };

      socket.onclose = event => {
        if (event.wasClean) {
          console.log('WebSocket: connection closed');
        } else {
          console.log('WebSocket: connection died');
        }
      };

      setWs(socket);

      return () => {
        socket.close();
      };
    }
  }, []);

  return (
    <>
      <RequestsContainer>
        <RequestForm previewRef={requestPreviewRef} />
        <RequestsPreview ref={requestPreviewRef} />
      </RequestsContainer>
      <RequestsContainer>
        <SocketPreview ref={socketPreviewRef} />
      </RequestsContainer>
      <RequestsContainer>
        <WebsocketPreview>
          <span style={{ textWrap: 'pretty' }}>{messages.join('')}</span>
        </WebsocketPreview>
      </RequestsContainer>
    </>
  );
};
