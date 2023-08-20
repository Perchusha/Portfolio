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

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
