'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  /*
   var collection_a = ['t', 'u', 'v', 'w', 'x',
    'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag',
    'ah', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap',
    'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay',
    'az', 'ba'
  ];
	var collection_b = ['ba', 'az', 'ay', 'ax', 'aw', 'av', 'au', 'at',
    'as', 'ar', 'aq', 'ap', 'ao', 'an', 'am', 'al', 'ak', 'aj', 'ai',
    'ah', 'ag', 'af', 'ae', 'ad', 'ac', 'ab', 'aa', 'z', 'y', 'x',
    'w', 'v', 'u', 't'
  ];
  */
  if (number_a < number_b) {
	  for (let i = number_a; i <= number_b; i++) {
		  let value = Convert26(i);
		  result.push(value);
	  }
  } else if (number_a > number_b) {
	  for (let i = number_a; i >= number_b; i--) {
		  let value = Convert26(i);
		  result.push(value);
	  }
  } else {
		  let value = Convert26(number_a);
		  result.push(value);
  }
  return result;
}

var Convert26=function(num){  
    var str="";  
    while (num > 0){  
        var m = num % 26;  
        if (m == 0){  
            m = 26;  
        }  
        str = String.fromCharCode(m + 96) + str;  
        num = (num - m) / 26;  
    }  
    return str;  
}  
module.exports = get_letter_interval_2;

