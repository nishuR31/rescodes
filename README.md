
# HTTP Status Codes

A lightweight, easy-to-use utility to access HTTP status codes and messages in JavaScript. This package provides a simple way to retrieve HTTP status codes and their corresponding messages, making it easier to work with HTTP responses in your applications. 

## Features

- Access HTTP status codes by their common name (e.g., `http.ok`, `http.notFound`).
- Retrieve the status message for a given code with `http.msg(code)`.
- Get the HTTP status code for a given message with `http.code("message")`.
- Supports **all** standard HTTP status codes from the IANA registry.
- It uses camel case, easy to adapt as per JS devs and other camel case users.

## Installation

To install the package via npm, run the following command:

```bash
npm install statusCodes
```
or
```bash
npm i statusCodes
```

## Usage

### Access status codes by name

You can directly access any HTTP status code using the camelCase name of the status:

```js
const http = require('statusCodes');
// import http from "statusCodes";

// Access status codes directly by name
console.log(http.ok);                // 200
console.log(http.notFound);          // 404
console.log(http.internalServerError); // 500
```

### Access status messages by code

You can retrieve the status message for a given status code using the `msg()` function:

```js
console.log(http.msg(200));          // "ok"
console.log(http.msg(404));          // "notFound"
console.log(http.msg(500));          // "internalServerError"
```

### Access status codes by message

You can retrieve the HTTP status code for a given message using the `code()` function:

```js
console.log(http.code("ok"));       // 200
console.log(http.code("notFound")); // 404
console.log(http.code("internalServerError")); // 500
```

### Invalid Input Handling

For invalid codes or messages, the functions return `null`:

```js
console.log(http.code("invalid")); // null
console.log(http.msg(9999));       // null
```

## License

[License](LICENSE)

<hr />

### Why Use This Package?

* **Simplicity**: This package simplifies accessing HTTP status codes and messages in your application.
* **Easy Integration**: Easy to install and use in any Node.js application.
* **Complete Coverage**: Supports all standard HTTP status codes (1xx to 5xx).
* **Camel Case**: Easy to adapt and use codes without thinking of other cases.
  
Feel free to contribute, create issues, or suggest enhancements via GitHub!

Happy Diwali..


