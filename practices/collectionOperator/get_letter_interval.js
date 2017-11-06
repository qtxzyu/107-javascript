'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if (number_a < number_b) {
	  for (let i = 1; i <= 5; i++) {
		  result.push(String.fromCharCode(i + 96));
	  }
  } else if (number_a > number_b) {
	  for (let i = 5; i >= 1; i--) {
		  result.push(String.fromCharCode(i + 96));
	  }
  } else {
	  result.push(String.fromCharCode(number_a + 96));
  }
  return result;
}

module.exports = get_letter_interval;
