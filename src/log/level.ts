const levelWarn = ["warn", "error"];
const levelInfo = ["info", "log", "warn", "error"];

enum LogLevels {
  VERBOSE = "VERBOSE",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}
export type LogLevel = "log" | "info" | "warn" | "error";
export { levelWarn, levelInfo, LogLevels };
