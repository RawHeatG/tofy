import { IGif } from "@giphy/js-types";

export const getDebouncedFunc = (callback: Function, delay: number = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), delay);
  };
};

export const segregateGifs = (gifs: IGif[], column: number): IGif[][] => {
  let count = 0;
  return gifs.reduce((acc: IGif[][], gif) => {
    acc[count] = [...acc[count], gif];
    count === column - 1 ? (count = 0) : count++;
    return acc;
  }, Array(column).fill([]));
};

export const getColumn = () =>
  window.matchMedia("(max-width: 480px)").matches
    ? 1
    : window.matchMedia("(max-width: 600px)").matches
    ? 2
    : window.matchMedia("(max-width: 900px)").matches
    ? 3
    : 4;
