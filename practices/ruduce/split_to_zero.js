'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
  while (number > 0) {
	  result.push(number);
	  number = accSub(number, interval);
  }
  result.push(number);
  result = result.map(function(e) {
	  return e - '0.0';
  });
  return result;
}
function accSub(arg1,arg2){ 
 var r1,r2,m,n; 
 try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
 try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
 m=Math.pow(10,Math.max(r1,r2)); 
 n=(r1>=r2)?r1:r2; 
 return ((arg1*m-arg2*m)/m).toFixed(n); 
}

module.exports = spilt_to_zero;
