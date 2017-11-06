'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let result = collection.map(function(element) {
	  return element * 3 + 2;
  }).reduce(function(x, y) {
	  return x + y;
  });
  return result;
}

module.exports = hybrid_operation;

