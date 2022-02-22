// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // You should use document.body, element.childNodes, and element.classList
  // input: string
  // output: array

  // if node is undefined
    // set node to document body

  if (node === undefined) {
    node = document.body;
  }

  // create a result array
  var result = [];
  // base case:
  // if the current node has a classList that contains className and is not in result array
  if (node.classList !== undefined) {
    if (node.classList.contains(className) && !(result.includes(node))) {
      // push to result array
      result.push(node);
    }
  }

  // if the node has childNodes
  if (node.childNodes !== undefined) {
    // iterate over the childNodes
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      // set result equal current result concated with call to getElementsByClassName passing in current childNode
      result = result.concat(getElementsByClassName(className, child));
    }
  }
  // return the result array
  return result;
};
