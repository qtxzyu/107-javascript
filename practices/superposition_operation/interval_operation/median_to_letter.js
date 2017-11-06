'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let result = collection.sort(function(x, y) {
	  return x - y;
	  
  });
  result = SelectionMedian(result);
  let length = result.length;
  let value = Math.ceil(result.reduce(function(x, y) {
	  return x + y;
  }) / length);
  value = Convert26(value);
  return value;
}
var SelectionMedian = function(collection) {
	let length = collection.length;
	let result = [];
	if (length % 2 === 0) {
		result.push(collection[length / 2]);
		result.push(collection[length / 2 - 1]);
	} else {
		result.push(collection[Math.floor(length / 2)]);
	}
	return result;
}

var Convert26 = function(value) {
	let num = value;
	let result = "";
	let m;
	while(num > 0) {
		m = num % 26;
		if (m === 0) {
			m = 26;
		}
		result = String.fromCharCode(m + 96) + result;
		num = (num - m) / 26;//这里的逻辑漏掉会导致死循环
	}
	return result;
}
module.exports = median_to_letter;
