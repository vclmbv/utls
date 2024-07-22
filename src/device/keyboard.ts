const keyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  //
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  //
  DELETE: 46,
  META: 91,
  SLASH: 191,
};

function isPrintable(key: number): boolean {
  // 출력가능한 키인지 확인
  // keycode deprecated => key
  return (
    (key > 47 && key < 58) || // 숫자 10개
    key === 32 || // space bar
    key === 13 || // enter
    key === 229 || //
    (key > 64 && key < 91) || // 알파벳 26개
    (key > 95 && key < 112) || // 숫자 패드 키
    (key > 185 && key < 193) || // 특수문자 키
    (key > 218 && key < 223)
  );
}

async function getKey(code, fallback) {
  const keyboard = navigator.keyboard;

  if (!keyboard) {
    return fallback;
  }

  const map = await keyboard.getLayoutMap();
  const key = map.get(code);

  return key || fallback;
}

export { keyCodes, isPrintable, getKey };
