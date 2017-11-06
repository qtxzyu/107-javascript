'use strict';

function compute_average(collection) {
  //在这里写入代码
  var result = collection.reduce(function(x, y) {
	  return x + y;
  });
  return result / (collection.length);
}

module.exports = compute_average;

