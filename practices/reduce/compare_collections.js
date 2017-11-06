'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  let result = collection_a.map(function(value, index, self) {
	  return value == collection_b[index];
  }).reduce(function(x, y) {
	  return x && y;//这里不能用&位操作符，要使用逻辑运算符
  });
  return result;
}

module.exports = compare_collections;


