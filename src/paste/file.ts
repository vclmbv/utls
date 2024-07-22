import { test } from "../etc";

function getFileExtension(file: File): string {
  return file.name.split(".").pop() as string;
}
function isValidMimeType(type: string): boolean {
  const re = /^[-\w]+\/([-+\w]+|\*)$/;
  return test(re, type);
}

export { getFileExtension, isValidMimeType };

/*
utls에서 dtls를 import하게 되면 
dtls가 utls를 import하면서 utls가 dtls를 import하는
순환 의존성이 발생하게 되므로 바람직하지 않음.
copyTextToClipboard를 dtls에 포함시킬 것.

import * as $ from "@vclmbv/dtls";

function copyTextToClipboard(text: string): void {
  const el = $.make("div", ["cdx-editor-clipboard"], { innerHTML: text });

  document.body.appendChild(el);

  const selection = window.getSelection();
  const range = document.createRange();

  range.selectNode(el);

  selection?.removeAllRanges();
  selection?.addRange(range);

  document.execCommand("copy");
  document.body.removeChild(el);
}

export { copyTextToClipboard };
*/
