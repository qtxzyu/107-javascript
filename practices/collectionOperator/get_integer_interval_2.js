'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if (number_a < number_b) {
	  for (let i = number_a; i <= number_b;) {
		if (i % 2 == 0) {
			result.push(i);
			i += 2;
		} else {
			i += 1;
		}
	  }
  } else if (number_a > number_b) {
	  for (let j = number_a; j >= number_b;) {
		  if (j % 2 == 0) {
			  result.push(j);
			  j -= 2;
		  } else {
			  j -= 1;
		  }
	  }
  } else {
	  if (number_a % 2 == 0) {
		  result.push(number_a);
	  }
  }
  
  return result;
}

module.exports = get_integer_interval_2;
