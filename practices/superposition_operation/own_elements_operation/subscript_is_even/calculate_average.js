'use strict';
var calculate_average = function(collection){
	let result = collection.filter(function(element,index) {
		return (index + 1) % 2 === 0;
	});
	let val = result.reduce(function(x, y) {
		return x + y;
	}) / result.length;
	return val;
};
module.exports = calculate_average;
