function t(n) {
  const r = Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/);
  return r ? r[1].toLowerCase() : "unknown";
}
function s(n) {
  return t(n) === "undefined";
}
function a(n) {
  return t(n) === "string";
}
function f(n) {
  return t(n) === "number";
}
function l(n) {
  return t(n) === "boolean";
}
function y(n) {
  return t(n) === "object";
}
function i(n) {
  return t(n) === "function" || t(n) === "asyncfunction";
}
function b(n) {
  return i(n) && /^\s*class\s+/.test(n.toString());
}
function o(n) {
  return Array.isArray(n);
}
function p(n) {
  return Promise.resolve(n) === n;
}
function g(n) {
  return n ? n.constructor === Object && Object.keys(n).length === 0 : !0;
}
function A(n) {
  return o(n) && n.length === 0;
}
function d(n) {
  return Array.prototype.slice.call(n);
}
function h(n) {
  return n[0].toUpperCase() + n.slice(1);
}
const u = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let c = (n = 21) => {
  let r = "", e = crypto.getRandomValues(new Uint8Array(n));
  for (; n--; )
    r += u[e[n] & 63];
  return r;
};
function m(n) {
  return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function j() {
  return c(10);
}
export {
  j as big,
  h as capitalize,
  m as ig,
  o as isArray,
  l as isBoolean,
  b as isClass,
  A as isEArray,
  g as isEObject,
  i as isFunction,
  f as isNumber,
  y as isObject,
  p as isPromise,
  a as isString,
  s as isUndefined,
  d as toArray,
  t as typeOf
};
