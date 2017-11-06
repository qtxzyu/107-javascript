'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let result = collection.filter(function(e) {
	  return e % 2 == 0;
  });
  return result[0];
}

module.exports = find_first_even;

