function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let result = collection_a.filter(function(element) {
	  return collection_b.indexOf(element) > -1;
  });
  return result;
}

module.exports = collect_same_elements;
