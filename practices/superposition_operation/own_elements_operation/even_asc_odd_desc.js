'use strict';
var even_asc_odd_desc = function(collection){
	let odd = collection.filter(function(element) {
		return element % 2 !== 0;
	}).sort(function(a, b) {
		return b - a;
	});
	let even = collection.filter(function(element) {
		return element % 2 === 0;
	}).sort(function(a, b) {
		return a - b;
	});
	let result = even.concat(odd);
	return result;
};
module.exports = even_asc_odd_desc;
