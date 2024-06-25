import { isArray } from "./isType";

function isEmptyObj(v) {
  if (!v) {
    return true;
  }

  return v.constructor === Object && Object.keys(v).length === 0;
}

function isEmptyArray(v) {
  // v.constructor로 array를 확인할 수 있는지 확인해볼 것
  return isArray(v) && v.length === 0;
}

export { isEmptyObj, isEmptyArray };
