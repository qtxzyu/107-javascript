'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let result = collection.filter(function(element) {
	  return element % 2 !== 0;
  }).map(function(element) {
	  return element * 3 + 2;
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;

