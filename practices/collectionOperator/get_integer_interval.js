'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if (number_a < number_b) {
	  for (let i = number_a; i <= number_b; i++) {
		  result.push(i);
	  }
  } else if (number_a > number_b) {
	  for (let j = number_a; j >= number_b; j--) {
		  result.push(j);
	  }
  } else {
	  result.push(number_a);
  }
  return result;
}

module.exports = get_integer_interval;

