function toArray(collection: ArrayLike<any>): any[] {
  // 유사 배열 객체인 collection을 배열로 변환하여 반환
  return Array.prototype.slice.call(collection);
}

function hasOwnProperty(obj: object, v: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, v);
}

export { toArray, hasOwnProperty };
