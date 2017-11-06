'use strict';
var single_element = function(collection){
	let result = collection.filter(function(element, index) {
		return (index + 1) % 2 === 0;
	}).filter(function(element, index, self) {
		return self.indexOf(element) === self.lastIndexOf(element);
	});
	return result;
};
module.exports = single_element;
