import { levelWarn, levelInfo, LogLevels, LogLevel } from "./level";
import { labelText, labelStyle } from "./label";

import { has } from "../basic";

function _log(
  labeled: boolean,
  msg: string,
  type: LogLevel = "log",
  args?: any,
  style = "color: inherit"
) {
  if (!("console" in window) || !window.console[type]) {
    return;
  }

  switch (_log.logLevel) {
    case LogLevels.ERROR:
      if (type !== "error") {
        return;
      }
      break;
    case LogLevels.WARN:
      if (!has(levelWarn, type)) {
        return;
      }
      break;
    case LogLevels.INFO:
      if (!has(levelInfo, type)) {
        return;
      }
      break;
  }

  const argsToPass = [];
  if (args) {
    argsToPass.push(args);
  }

  if (labeled) {
    if (has(levelInfo, type)) {
      argsToPass.unshift(labelStyle, style);
      msg = `%c${labelText}%c ${msg}`;
    } else {
      msg = `(${labelText}) ${msg}`;
    }
  }

  try {
    if (!has(levelInfo, type)) {
      console[type](msg);
    } else if (args) {
      console[type](`${msg} %o`, ...argsToPass);
    } else {
      console[type](msg, ...argsToPass);
    }
  } catch (ignored) {}
}

_log.logLevel = LogLevels.VERBOSE;

function setLogLevel(logLevel: LogLevels): void {
  _log.logLevel = logLevel;
}

const log = _log.bind(window, false);
const logLabeled = _log.bind(window, true);

export { setLogLevel, log, logLabeled };
