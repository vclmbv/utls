function typeOf(v: any): string {
  const result = Object.prototype.toString.call(v).match(/\s([a-zA-Z]+)/);
  return result ? result[1].toLowerCase() : "unknown";
}

function isNull(v: any): v is null {
  return typeOf(v) === "null";
}
function isUndefined(v: any): v is undefined {
  return typeOf(v) === "undefined";
}
function isString(v: any): v is string {
  return typeOf(v) === "string";
}
function isNumber(v: any): v is number {
  return typeOf(v) === "number";
}
function isBoolean(v: any): v is boolean {
  return typeOf(v) === "boolean";
}
function isObject(v: any): v is object {
  return typeOf(v) === "object";
}
function isFunction(v: any): v is (...args: any[]) => any {
  return typeOf(v) === "function" || typeOf(v) === "asyncfunction";
}
function isClass(v: any): boolean {
  return isFunction(v) && /^\s*class\s+/.test(v.toString());
}
function isArray(v: any): boolean {
  return Array.isArray(v);
}
function isPromise(v: any): v is Promise<any> {
  return Promise.resolve(v) === v;
}

//
function isEmpty(v: object): boolean {
  if (!v) {
    return true;
  }

  return v.constructor === Object && Object.keys(v).length === 0;
}

function isEObject(v: object): boolean {
  if (!v) {
    return true;
  }

  return v.constructor === Object && Object.keys(v).length === 0;
}

function isEArray(v: any[]): boolean {
  return isArray(v) && v.length === 0;
}

function isValidIndex(target: any[], index: number): boolean {
  return !(index < 0 || index >= target.length);
}

export {
  typeOf,
  //
  isNull,
  isUndefined,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isFunction,
  isClass,
  isArray,
  isPromise,
  //
  isEmpty,
  //
  isValidIndex,
};
