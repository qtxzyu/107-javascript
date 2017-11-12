'use strict';
function one_add_next_multiply_three(collection){
  //return [12,24,36,48,60,72,84,96,108,120];
  var result = collection.map(function(element, index, self) {
	  if (index < self.length - 1) {
		  return 3 * (element + self[index + 1]);
	  }
  });
  result = result.slice(0, -1);
  return result;
}
module.exports = one_add_next_multiply_three;
