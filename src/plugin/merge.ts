import { isObject } from "../basic";

// internal tools와 external tools merge
function mergePlugins<T extends object>(target, ...sources): T {
  if (!sources.length) {
    return target;
  }

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }

        mergePlugins(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergePlugins(target, ...sources);
}

export { mergePlugins };
