'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let result = collection.join(",").split(",").map(function(e) {
	  return parseInt(e);
  }).filter(function(element, index, self) {
	  return self.indexOf(element) === index;
  })
  return result;
}

module.exports = double_to_one;
