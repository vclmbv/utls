function t(n) {
  const r = Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/);
  return r ? r[1].toLowerCase() : "unknown";
}
function i(n) {
  return t(n) === "undefined";
}
function o(n) {
  return t(n) === "string";
}
function u(n) {
  return t(n) === "number";
}
function s(n) {
  return t(n) === "boolean";
}
function c(n) {
  return t(n) === "object";
}
function e(n) {
  return t(n) === "function" || t(n) === "asyncfunction";
}
function f(n) {
  return e(n) && /^\s*class\s+/.test(n.toString());
}
function a(n) {
  return Array.isArray(n);
}
function l(n) {
  return Promise.resolve(n) === n;
}
export {
  a as isArray,
  s as isBoolean,
  f as isClass,
  e as isFunction,
  u as isNumber,
  c as isObject,
  l as isPromise,
  o as isString,
  i as isUndefined,
  t as typeOf
};
