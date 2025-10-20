import codes from "./codes.js";

const reverseMap = Object.fromEntries(
  Object.entries(codes).map(([key, value]) => [value, key])
);

const msg = (code) => reverseMap[code] ?? "unknownStatus";
const code = (name) => codes[name]?? null;

export default {
  ...codes,
  msg,
  code,
};




