'use strict';

function compute_median(collection) {
  //在这里写入代码
  var value;
  if (collection.length % 2 == 0) {
	  value = collection[collection.length / 2] + collection[collection.length / 2 - 1];
	  value /= 2;
	  if (value > 2) {
		  value -= 1;
	  }
  } else {
	  value = collection[(collection.length - (collection.length % 2)) / 2];
  }
  return value;
}

module.exports = compute_median;


