export const debounce = function (callback, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const inBox = (event, node) => {
  return event.target === node;
};
