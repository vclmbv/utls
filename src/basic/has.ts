function has(v1: string[], v2: string): boolean {
  return v1.includes(v2);
}

function hasOwnProperty(obj: object, v: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, v);
}

export { has, hasOwnProperty };
