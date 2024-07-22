const isIos =
  typeof window !== "undefined" &&
  window.navigator &&
  window.navigator.userAgent &&
  (/iphone|ipad|ipod/i.test(window.navigator.userAgent) ||
    (window.navigator.userAgent.includes("Mac") &&
      window.navigator.maxTouchPoints > 1));

function getOS() {
  const OS = { win: false, mac: false, x11: false, linux: false };

  const appVersion = window.navigator.appVersion.toLowerCase();
  const userOS = Object.keys(OS).find((os) => appVersion.indexOf(os) !== -1);

  if (userOS) {
    OS[userOS] = true;
    return OS;
  }
  return OS;
}

export { isIos, getOS };
