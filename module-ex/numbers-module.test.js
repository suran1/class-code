var beforeAfter = require('./numbers-module.js');
var arr = [62,89,56,45,12,91,81];

var result;

console.log('test 1 - middle number');

result = beforeAfter(45,arr);
if(result[0]=== 56 && result [1]=== 12){
  console.log('Test passed');

}else {
  console.log('Test failed');

}

console.log('Test - 2 First Number');

result = beforeAfter(62, arr);
if(result[0]=== 81 && result [1]=== 89){
  console.log('Test passed');

}else {
  console.log('Test Failed');

}

console.log('Test 3 - Last Number');
result = beforeAfter (81,arr);
if(result[0]=== 91 && result [1] === 62){

  console.log('Test passed');

}else {
  console.log('Test Failed');
  
}
