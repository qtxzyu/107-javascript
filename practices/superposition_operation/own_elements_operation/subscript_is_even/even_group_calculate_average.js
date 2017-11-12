'use strict';
var even_group_calculate_average = function(collection){
	let result = [];
	let val = 0;
	let count = 0;
	let array = collection.filter(function(element,index) {
		return index % 2 !== 0;
	}).filter(function(element) {
		return element % 2 == 0;
	}).sort(function(a, b) {
		return Number(a).toString().length - Number(b).toString().length;
	});
	console.log(array);
	if (array.length == 0) {
		array = [0];
	}
	array = array.map(function(element, index, self) {
		if (index < self.length -1) {
			if(Number(element).toString().length == Number(self[index + 1]).toString().length) {
				val += element;
				count++;
			} else {
				val += element;
				count++;
				result.push(val / count);
				val = 0;
				count = 0;
			}
		} else {
			if (val == 0) {
				result.push(element);
			} else {
				val += element;
				count++;
				result.push(val / count);
			}
		}

	});
	return result;
};
module.exports = even_group_calculate_average;
