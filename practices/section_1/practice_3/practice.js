function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let array = object_b.value;
  let result = collection_a.filter(function(element) {
	  return array.indexOf(element) > -1;
  });
  return result;
}

module.exports = collect_same_elements;
