function getDefined(v1: any, v2: any): any {
  return v1 !== undefined ? v1 : v2;
}

function getNotNull(v1: any, v2: any): any {
  return v1 !== null ? v1 : v2;
}

export { getDefined, getNotNull };
