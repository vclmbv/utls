import HTMLJanitor from "html-janitor";

import {
  isArray,
  isObject,
  isString,
  isBoolean,
  isFunction,
  hasOwnProperty,
} from "../basic";

function deepSanitize(data: object | string, config) {
  if (isArray(data)) {
    return cleanArray(data, config);
  } else if (isObject(data)) {
    return cleanObject(data, config);
  } else {
    if (isString(data)) {
      return cleanString(data, config);
    }

    return data;
  }
}
function cleanArray(data: Array<object | string>, config) {
  return data.map((item) => deepSanitize(item, config));
}
function cleanObject(data: object, config) {
  const emptyObj = {};

  for (const name in data) {
    if (!hasOwnProperty(data, name)) {
      continue;
    }

    const value = data[name];
    const validConfig = isValidConfig(config[name]) ? config[name] : config;
    emptyObj[name] = deepSanitize(value, validConfig);
  }

  return emptyObj;
}
function cleanString(data: string, config) {
  if (isObject(config)) {
    return clean(data, config);
  } else if (config === false) {
    return clean(data, {});
  } else {
    return data;
  }
}
function clean(data, config) {
  const sanitizerInstance = new HTMLJanitor({ tags: config });
  return sanitizerInstance.clean(data);
}

function isValidConfig(config): boolean {
  return isObject(config) || isBoolean(config) || isFunction(config);
}

export { deepSanitize };
