'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  collection.sort();
  
  var map = new Map();
  for (let i = 0; i < collection.length; i++) {
	  if (map.has(collection[i])) {
		  map.set(collection[i], map.get(collection[i])+1);  
	  } else {
		  map.set(collection[i], 1);
	  }
  }
  for (let [key, value] of map.entries()) {
	  result[key] = value;
  }
  return result;
}

module.exports = grouping_count;
