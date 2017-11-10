function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  	var result = [];
	var temp = collection_a[0];
	var count = 0;
	for (let i = 0; i < collection_a.length; i++) {
		if (temp === collection_a[i]) {
			count++;
		}
		if (temp != collection_a[i] || (i === collection_a.length - 1)) {
			result.push({
				key:temp,
				count:count
			});
			
			temp = collection_a[i];
			var count = 1;
		}
		if (collection_a[i].length > 1) {
			var values = collection_a[i].split("-");
			temp = values[0];
			count = parseInt(values[1]);
			result.push({
				key:temp,
				count:count
			})
		}
	}
	for (let i = 0; i < result.length; i++) {
		if (object_b["value"].indexOf(result[i]["key"]) > -1) {
			let value = parseInt(result[i]["count"] / 3);
			result[i]["count"] -= value;
		}
	}
	return result;
}

module.exports = create_updated_collection;
