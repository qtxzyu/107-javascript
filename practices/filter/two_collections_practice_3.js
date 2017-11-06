'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  /*
  var result = [];
  for (let i = 0; i < collection_a.length; i++) {
	  for (let j = 0; j < collection_b.length; j++) {
		  if (collection_a[i] % collection_b[j] == 0) {
			  result.push(collection_a[i]);
		  }
	  }
  }
  return result;
  */
  let result = collection_a.filter(function(element, index, self) {
	  let value = collection_b.filter(function(e) {
		  return element % e == 0;
	  })
	  //console.log(value);
	  return value.length !== 0;
  })
  //console.log(result);
  return result;
}

//choose_divisible_integer([4,7,9],[3]);
module.exports = choose_divisible_integer;
