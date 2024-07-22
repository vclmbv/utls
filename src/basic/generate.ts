import { nanoid } from "nanoid";

function ig(prefix: string): string {
  return `${prefix}${Math.floor(Math.random() * 1e8).toString(16)}`;
}

function big(): string {
  const size = 10;
  return nanoid(size);
}

// class name generator
function cng(blockName: string) {
  const ELEMENT_DELIMITER = "__";
  const MODIFIER_DELIMITER = "--";

  return (elementName?: string | null, modifier?: string) => {
    const className = [blockName, elementName]
      .filter((x) => !!x)
      .join(ELEMENT_DELIMITER);

    return [className, modifier].filter((x) => !!x).join(MODIFIER_DELIMITER);
  };
}

export { ig, big, cng };

// 동일한 값이 생성될 수 있음
// 값을 확인하는 내용의 코드가 있는지 확인할 것
