// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // create result string
  var result = '';
  // if obj is a primitive data structure
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    result += obj;
  }
  if (obj === null) {
    result += 'null';
  }
  if (typeof obj === 'string') {
    result = '"' + obj + '"';
  }
  // if obj is an array
  if (Array.isArray(obj)) {
    var arr = [];
    // iterate over the array
    for (var i = 0; i < obj.length; i++) {
      // set result to a call to stringifyJSON for each element
      arr.push(stringifyJSON(obj[i]));
    }
    result += '[' + arr + ']';
  } else if (typeof obj === 'object' && obj !== null) {
    var objStr = [];
    // iterate using a for in loop
    for (var key in obj) {
      // if obj is not undefined
      if (obj[key] !== undefined) {
        // if obj is not a function
        if (typeof obj[key] !== 'function') {
          // set result to a call to stringifyJSON for each item
          objStr.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
        }
      } else {
        return undefined;
      }
    }
    result += '{' + objStr + '}';
  }
  // return result string
  return result;
};
