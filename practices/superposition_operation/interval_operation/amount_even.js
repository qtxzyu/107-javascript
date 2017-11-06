'use strict';

function amount_even(collection) {

  //在这里写入代码
  let result = collection.filter(function(element) {
	  return element % 2 === 0;
  }).reduce(function(x, y) {
	  return x + y;
  });
  return result;
}

module.exports = amount_even;
