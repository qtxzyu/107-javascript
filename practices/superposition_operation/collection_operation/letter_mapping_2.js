'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let length = collection.length;
  let result = collection.reduce(function(x, y) {
	  return x + y;
  });
  result = Math.ceil(result / length);
  result = String.fromCharCode(result + 96);
  return result;
}

module.exports = average_to_letter;

