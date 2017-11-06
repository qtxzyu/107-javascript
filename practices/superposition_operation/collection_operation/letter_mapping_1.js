'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let result = collection.filter(function(element) {
	  return element % 2 == 0;
  }).map(function(element) {
	  return String.fromCharCode(element + 96);
  });
  return result;
}

module.exports = even_to_letter;
