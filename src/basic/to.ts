function toLower(v: string): string {
  return v.toLowerCase();
}

function toFirstUpper(v: string): string {
  return v[0].toUpperCase() + v.slice(1);
}

function toJson(v: any): string {
  return JSON.stringify(v);
}

function toArray(collection: ArrayLike<any>): any[] {
  // 유사 배열 객체인 collection을 배열로 변환하여 반환
  return Array.prototype.slice.call(collection);
}

export { toLower, toFirstUpper, toArray, toJson };
