function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
	var temp = collection[0];
	var count = 0;
	for (let i = 0; i < collection.length; i++) {
		if (temp === collection[i]) {
			count++;
		}
		if (temp != collection[i] || (i === collection.length - 1)) {
			result.push({
				key:temp,
				count:count
			});
			
			temp = collection[i];
			var count = 1;
		}
	}
  return result;
}

module.exports = count_same_elements;
