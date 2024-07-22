import { isArray, isObject } from "./is";
import { toJson } from "./to";

function equal(v1: unknown, v2: unknown): boolean {
  const primitive1 = isArray(v1) || isObject(v1);
  const primitive2 = isArray(v2) || isObject(v2);

  if (primitive1 || primitive2) {
    return toJson(v1) === toJson(v2);
  }
  return v1 === v2;
}

export { equal };
