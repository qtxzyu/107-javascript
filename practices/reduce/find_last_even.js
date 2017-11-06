'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let result = collection.filter(function(e) {
	  return e % 2 == 0;
  });
  return result[result.length - 1];
}

module.exports = find_last_even;
