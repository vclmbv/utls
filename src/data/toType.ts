function toArray(collection) {
  // 유사 배열 객체인 collection을 배열로 변환하여 반환
  return Array.prototype.slice.call(collection);
}

export { toArray };
