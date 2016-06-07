'use strict';

var arry=new Array();
function fibonacci_series(n) {
   arry[0]=0;
   arry[1]=1;
   for (var i=2;i<n+1;i++) {
   	  arry[i]=arry[i-1]+arry[i-2];
   }
  return arry;
}

module.exports = fibonacci_series;
