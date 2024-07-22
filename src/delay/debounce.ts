function debounce(
  cb: (...args: unknown[]) => void,
  delay?: number,
  start?: boolean
) {
  let timeoutID: undefined | number;

  function clearExistingTimeout() {
    if (timeoutID) {
      window.clearTimeout(timeoutID);
    }
  }

  return function (...args: unknown[]): void {
    const context = this;

    function clear() {
      timeoutID = undefined;
    }

    function exec() {
      cb.apply(context, args);
    }

    if (start && !timeoutID) {
      exec();
    }

    clearExistingTimeout();

    timeoutID = window.setTimeout(() => {
      clear();
      if (!start) {
        exec();
      }
    }, delay);
  };
}

export { debounce };
