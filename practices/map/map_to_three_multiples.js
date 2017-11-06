'use strict';
var map_to_three_multiples = function(collections){
	let result = collections.map(function(value) {
		return value * 3;
	});
  return result;
}
module.exports = map_to_three_multiples;
