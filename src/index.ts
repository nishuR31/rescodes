import codes from "./codes.js";

const reverseMap = Object.fromEntries(
  Object.entries(codes).map(([key, value])=> [value, key])
);

const msg: (T: number) => string = (code) =>
  reverseMap[code] ?? "UnknownStatuscode";
const code: (T: string) => number | string = (name) =>
  codes[name] ?? "UnknownStatusMessage";

export default {
  ...codes,
  msg,
  code,
};
