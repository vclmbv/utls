function delay(func: (...args: any[]) => any, wait: number) {
  return function (...args: any[]): void {
    const context = this;

    window.setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

export { delay };
