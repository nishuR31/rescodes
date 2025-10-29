type Format = Record<string, number>;

const informational: Format = {
  continue: 100,
  switchingProtocols: 101,
  processing: 102,
  earlyHints: 103,
};

const successful: Format = {
  ok: 200,
  created: 201,
  accepted: 202,
  nonAuthoritativeInformation: 203,
  noContent: 204,
  resetContent: 205,
  partialContent: 206,
  multiStatus: 207,
  alreadyReported: 208,
  imUsed: 226,
};

const redirection: Format = {
  multipleChoices: 300,
  movedPermanently: 301,
  found: 302,
  seeOther: 303,
  notModified: 304,
  useProxy: 305,
  switchProxy: 306, // unused / reserved
  temporaryRedirect: 307,
  permanentRedirect: 308,
};

const clientError: Format = {
  badRequest: 400,
  unauthorized: 401,
  paymentRequired: 402,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
  notAcceptable: 406,
  proxyAuthenticationRequired: 407,
  requestTimeout: 408,
  conflict: 409,
  gone: 410,
  lengthRequired: 411,
  preconditionFailed: 412,
  payloadTooLarge: 413,
  uriTooLong: 414,
  unsupportedMediaType: 415,
  rangeNotSatisfiable: 416,
  expectationFailed: 417,
  imATeapot: 418,
  misdirectedRequest: 421,
  unprocessableEntity: 422,
  locked: 423,
  failedDependency: 424,
  tooEarly: 425,
  upgradeRequired: 426,
  preconditionRequired: 428,
  tooManyRequests: 429,
  requestHeaderFieldsTooLarge: 431,
  unavailableForLegalReasons: 451,
};

const serverError: Format = {
  internalServerError: 500,
  notImplemented: 501,
  badGateway: 502,
  serviceUnavailable: 503,
  gatewayTimeout: 504,
  httpVersionNotSupported: 505,
  variantAlsoNegotiates: 506,
  insufficientStorage: 507,
  loopDetected: 508,
  networkAuthenticationRequired: 511,
};

const groups: Object = {
  informational,
  successful,
  redirection,
  clientError,
  serverError,
};

const flatten: (obj: Record<string, any>) => Format = (obj) => {
  let result: Format = {};
  for (const key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result = { ...result, ...flatten(obj[key]) }; // Recursively flatten
    } else {
      result[key] = obj[key]; // Copy the key-value pair
    }
  }
  return <Format>result;
};

let codes = flatten(groups);
export default codes;
