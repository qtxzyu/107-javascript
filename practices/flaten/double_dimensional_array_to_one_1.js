'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  result = collection.join(",").split(",").map(function(value) {
	  return parseInt(value);
  });
  return result;
}

module.exports = double_to_one;
