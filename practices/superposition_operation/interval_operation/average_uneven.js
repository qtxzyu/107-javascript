'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let result = collection.filter(function(element) {
	  return element % 2 !== 0;
  });
  let val = result.reduce(function(x, y) {
	  return x + y;
  });
  val = val / result.length;
  return val;
}

module.exports = average_uneven;
