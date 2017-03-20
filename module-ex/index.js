var beforeAfter = require('./numbers-module.js');

var arr = [62,89,56,45,12,91,81];

for(var i= 0; i<arr.length; i++){
  console.log(beforeAfter(arr[i], arr));
  
}
