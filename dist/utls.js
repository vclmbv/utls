import { nanoid as e } from "nanoid";
function t(n) {
  const r = Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/);
  return r ? r[1].toLowerCase() : "unknown";
}
function c(n) {
  return t(n) === "null";
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
function p(n) {
  return t(n) === "object";
}
function o(n) {
  return t(n) === "function" || t(n) === "asyncfunction";
}
function y(n) {
  return o(n) && /^\s*class\s+/.test(n.toString());
}
function i(n) {
  return Array.isArray(n);
}
function b(n) {
  return Promise.resolve(n) === n;
}
function g(n) {
  return n ? n.constructor === Object && Object.keys(n).length === 0 : !0;
}
function m(n) {
  return i(n) && n.length === 0;
}
function O(n) {
  return Array.prototype.slice.call(n);
}
function h(n, r) {
  return Object.prototype.hasOwnProperty.call(n, r);
}
function j(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function A(n) {
  return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function d() {
  return e(10);
}
export {
  d as big,
  j as capitalize,
  h as hasOwnProperty,
  A as ig,
  i as isArray,
  l as isBoolean,
  y as isClass,
  m as isEArray,
  g as isEObject,
  o as isFunction,
  c as isNull,
  f as isNumber,
  p as isObject,
  b as isPromise,
  a as isString,
  s as isUndefined,
  O as toArray,
  t as typeOf
};
