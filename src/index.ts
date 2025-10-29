import codes from "./codes.ts";

const reverseMap = Object.fromEntries(
  Object.entries(codes).map(([key, value])=> [value, key])
);

const msg: (T: number) => string = (code) =>
  reverseMap[code] ?? "unknownStatus";
const code: (T: string) => number | string = (name) =>
  codes[name] ?? "Unknown code";

export default {
  ...codes,
  msg,
  code,
};

// console.log(msg(200),code("ok"))