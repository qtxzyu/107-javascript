'use strict';
var is_exist_element = function(collection,element){
	let result = collection.filter(function(e, index) {
		return index % 2 == 0;
	});
	//console.log(result);
	let val = result.map(function(x) {
		return x === element;
	}).reduce(function(x, y) {
		return x || y;
	});
	//console.log(val);
	return val;

};
//is_exist_element([1,2,3,4,5,6],3);
module.exports = is_exist_element;
