import codes from "./codes.js";

const reverseMap: { [key: number]: string } = Object.fromEntries(
  Object.entries(codes).map(([key, value]) => [value, key])
);

const msg: Function = (code: number): string =>
  reverseMap[code] || "unknown code provided";
const code: Function = (name: string): number | string => codes[name] ?? "Invalid message provided";

export default {
  ...codes,
  msg,
  code,
};

console.log(msg(207))
console.log(code("ok"))
