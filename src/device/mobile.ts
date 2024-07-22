const mobileWidth = 600;

function isMobile() {
  return window.matchMedia(`(max-width: ${mobileWidth}px)`).matches;
}
const isTouchable = "ontouchstart";

export { mobileWidth, isMobile, isTouchable };
