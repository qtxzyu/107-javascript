'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let array = collection.sort(function(a, b) {
	  return a - b;
  });
  let result = array.map(function(element, index, self) {
	  if (index + 2 < self.length) {
		  if (index % 3 == 0 || index % 3 == 1) {
			  return self[index + 1];
		  } else {
			  return self[index - 2];
		  }
			
	  } else {
		  return element;
	  }
	  
  });
  return result;
}
module.exports = rank_by_two_large_one_small;
