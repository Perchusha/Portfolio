import { useEffect, RefObject, KeyboardEvent } from 'react';

type KeyCallbackMap = {
  [key: string]: (event: KeyboardEvent) => void;
};

export const useKeyboardListener = (
  ref: RefObject<SVGSVGElement | HTMLElement>,
  keyCallbackMap: KeyCallbackMap
) => {
  useEffect(() => {
    const handleKeyDown = ((event: KeyboardEvent) => {
      const callback = keyCallbackMap[event.key];
      if (callback) {
        callback(event);
      }
    }) as unknown as EventListenerOrEventListenerObject;

    const element = ref.current;
    if (element) {
      element.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (element) {
        element.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [ref, keyCallbackMap]);
};
