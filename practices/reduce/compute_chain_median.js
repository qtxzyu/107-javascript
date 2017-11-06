'use strict';

function compute_chain_median(collection) {

  let result = String(collection).split("->");
  result = result.map(function(e) {
	  return parseInt(e);
  }).sort(function(a, b) {
	  return a - b
  });
  let value;
  if (result.length % 2 == 0) {
	  value = result[result.length / 2] + result[result.length / 2 - 1];
	  value /= 2;
  } else {
	  value = result[(result.length - (result.length % 2)) / 2];
  }
  return value;
  /*
  let middle;
  let arr = collection.split('->').sort(function(a, b) {
    return a - b;
  });
  if ((arr.length) % 2 === 0) {
    middle = (Number(arr[arr.length / 2 - 1]) + Number(arr[arr.length / 2])) / 2;
  } else {
    middle = Number(arr[(arr.length - 1) / 2]);
  }
return middle;*/
}
//compute_chain_median('1,2,3,4');
module.exports = compute_chain_median;
