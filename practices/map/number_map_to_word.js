'use strict';
var number_map_to_word = function(collection){
	let result = collection.map(function(e) {
		return Convert26(e);
	});
  return result;
};
var Convert26 = function(num) {
	var str = "";
	while (num > 0) {
		var m = num % 26;
		if ( m == 0) {
			m = 26;
		}
		str = String.fromCharCode(m + 96) + str;
		num = (num - m) / 26;
	}
	return str;
}
module.exports = number_map_to_word;
