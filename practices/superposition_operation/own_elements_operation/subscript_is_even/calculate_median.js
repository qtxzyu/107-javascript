'use strict';
var calculate_median = function(collection){
	let array = collection.filter(function(element, index) {
		return (index + 1) % 2 === 0;
	});
	array = SelectionMedian(array);
	let result = array.reduce(function(x, y) {
		return x + y;
	}) / array.length;
	return result;

};
var SelectionMedian = function(collection) {
	let length = collection.length;
	let result = [];
	if (length % 2 === 0) {
		result.push(collection[length / 2]);
		result.push(collection[length / 2 - 1]);
	} else {
		result.push(collection[Math.floor(length / 2)]);
	}
	return result;
}
module.exports = calculate_median;
