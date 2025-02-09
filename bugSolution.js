function foo(x) {
  if (x === null) {
    return "null";
  } else if (x === undefined) {
    return "undefined";
  } else {
    return x;
  }
}

console.log(foo(null)); // Output: null
console.log(foo(undefined)); // Output: undefined
console.log(foo(0)); // Output: 0
console.log(foo(NaN)); // Output: NaN

function fooStrict(x) {
  if (x === null) {
    return "null";
  } else if (x === undefined) {
    return "undefined";
  } else if (x === 0) {
    return "0";
  } else if (x === "") {
    return ""
  } else if (x === false) {
    return "false";
  } else {
    return x;
  }
}

console.log(fooStrict(null)); // Output: null
console.log(fooStrict(undefined)); // Output: undefined
console.log(fooStrict(0)); // Output: 0
console.log(fooStrict(NaN)); // Output: NaN