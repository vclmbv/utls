import { logLabeled } from "./logger";

function deprecator(
  condition: boolean,
  prevProp: string,
  newProp: string
): void {
  const stc1 = `${prevProp} is deprecated`;
  const stc2 = `and will be removed in the next major release.`;
  const stc3 = `Please use the ${newProp} instead.`;
  const msg = `${stc1} ${stc2} ${stc3}`;

  if (condition) {
    logLabeled(msg, "warn");
  }
}

export { deprecator };
