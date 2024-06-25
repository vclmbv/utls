import { nanoid } from "nanoid";

function ig(prefix: string): string {
  // 동일한 값이 생성될 수 있음
  // 값을 확인하는 내용의 코드가 있는지 확인할 것
  return `${prefix}${Math.floor(Math.random() * 1e8).toString(16)}`;
}

function big(): string {
  const size = 10;
  return nanoid(size);
}

export { ig, big };
