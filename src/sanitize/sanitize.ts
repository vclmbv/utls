import { deepSanitize } from "./deep";
import { isFunction, isEmpty } from "../basic";

function sanitize(data, config) {
  return data.map((item) => {
    const toolConfig = isFunction(config) ? config(item.tool) : config;

    if (isEmpty(toolConfig)) {
      return item;
    }

    item.data = deepSanitize(item.data, toolConfig);

    return item;
  });
}

export { sanitize };
