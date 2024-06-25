import { nanoid } from "nanoid";

function ig(prefix) {
  return `${prefix}${Math.floor(Math.random() * 1e8).toString(16)}`;
}

function big() {
  const size = 10;
  return nanoid(size);
}

function cng() {}

export { ig, big };
