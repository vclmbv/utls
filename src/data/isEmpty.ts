import { isObject, isArray } from "./isType";

function isEObject(v: object): boolean {
  if (!v) {
    return true;
  }

  return v.constructor === Object && Object.keys(v).length === 0;
}

function isEArray(v: any[]): boolean {
  return isArray(v) && v.length === 0;
}

export { isEObject, isEArray };
