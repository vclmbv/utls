function throttle(
  cb: (...args: any[]) => void,
  delay: number,
  options: { start?: boolean; end?: boolean } = {}
): () => void {
  const { start, end } = options;

  let prev = 0;
  let timeout: undefined | number = undefined;
  let result;

  function clearExistingTimeout() {
    if (timeout) {
      window.clearTimeout(timeout);
    }
  }

  return function (...args: any[]): unknown {
    let context = this;
    let elapsed = Date.now() - prev;

    function clear() {
      timeout = undefined;
    }

    function exec() {
      prev = Date.now();
      cb.apply(context, args);
    }

    if (!prev && start === false) {
      prev = Date.now();
    }

    if (elapsed >= delay) {
      if (start) {
        exec();
      } else {
      }

      //
    } else if (end === true && !timeout) {
      if (start === false) {
        timeout = window.setTimeout(() => {
          clear();
          prev = 0;
          result = cb.apply(context, args);
          //
        }, delay - elapsed);
      } else {
        timeout = window.setTimeout(() => {
          clear();
          prev = Date.now();
          result = cb.apply(context, args);
          //
        }, delay - elapsed);
      }
    }
    return result;
  };
}

export { throttle };

/* 
- 호출/실행
- 실행 여부/실행 지연 여부
를 분리해서 생각할 것
*/

/*
  if (!timeout) {
        context = args = null;
      }
*/

/*
export default function (delay, cb, options) {
  const {
    noTrailing = false,
    noLeading = false,
    mode = undefined,
  } = options || {};

  let timeoutID;
  let cancelled = false;
  let prev = 0;

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }

  function cancel(options) {
    const { upcomingOnly = false } = options || {};
    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }

  function wrapper(...arguments_) {
    let context = this;
    let elapsed = Date.now() - prev;

    if (cancelled) {
      return;
    }

    function clear() {
      timeoutID = undefined;
    }

    function exec() {
      prev = Date.now();
      cb.apply(context, arguments_);
    }

    if (!noLeading && mode && !timeoutID) {
      // noLeading:false, mode:true, timeoutID:undefined
      exec();
    }

    clearExistingTimeout();

    if (mode === undefined && elapsed > delay) {
      if (noLeading) {
        prev = Date.now();
        if (!noTrailing) {
          timeoutID = setTimeout(mode ? clear : exec, delay);
        }
      } else {
        exec();
      }
    } else if (noTrailing !== true) {
      // noTrailing: false
      timeoutID = setTimeout(
        mode ? clear : exec,
        mode === undefined ? delay - elapsed : delay
      );
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
*/
