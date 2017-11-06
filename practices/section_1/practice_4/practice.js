function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = collection_a.map(function(element) {
	  return element.key;
  }).filter(function(element) {
	  return object_b.value.indexOf(element) > -1;
  });
  return result;
}

module.exports = collect_same_elements;
