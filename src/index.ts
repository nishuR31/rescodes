import codes from "./codes.ts";

const reverseMap = Object.fromEntries(
  Object.entries(codes).map(([key, value])=> [value, key])
);

const msg: (T: number) => string = (code) =>
  reverseMap[code] ?? "UnknownStatuscode";
const code: (T: string) => number | string = (name) =>
  codes[name] ?? "UnknownDtatusMessage";

export default {
  ...codes,
  msg,
  code,
};

