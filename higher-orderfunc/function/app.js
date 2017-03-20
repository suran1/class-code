// filter,map

// var pets = [
//   { name: 'Sprinkles', type: 'dog' },
//   { name: 'Reece', type: 'dog' },
//   { name: 'Pukes-a-lot', type: 'cat' },
//   { name: 'Not-a-real-pet', type: 'cat' },
//   { name: 'Fluffykins', type: 'dog' },
//   { name: 'Ugly', type: 'cat' }
// ];

// var dogs  = pets.map(function(element, index, origArray){
// if(element.type === 'cat'){
//   element.isPrecious = false;
//   return element;
//
// }
// element.isPrecious = true;
//   return element;
//
// });
// console.log(dogs);

// mpp

// var allDogsArePrecious = function (element, index, origArray){
//
//   if(element.type === 'cat'){
//     element.isPrecious = false;
//     return element;
//     }
//     element.isPrecious = true;
//     return element;
//   };
//
//   var dogs = pets.map(allDogsArePrecious);
//   console.log(dogs);


// reduce

// var dogCount = pets.reduce(function (total, element, index, origArray){
//
//   if(element.type === 'dog'){
//     return total + 1;
//     }
//     return total + 0;
//
// }, 0);
//
// console.log(dogCount);



// var countIfDog = function (total, element, indext ,origArray){
//   if(element.type === 'dog'){
//     return total + 1;
//
//   }
//
//   return total + 0;
//
// }
//
//
// var dogCount = pets.reduce (countIfDog,0);
// console.log(dogCount);


 var users = [
  { id: 1, firstName: 'Blake', lastName: 'Johnston', isMember: true },
  { id: 2, firstName: 'Susan', lastName: 'Wright', isMember: false },
  { id: 3, firstName: 'John', lastName: 'Smith', isMember: false },
  { id: 4, firstName: 'Jen', lastName: 'Hawkins', isMember: false },
  { id: 5, firstName: 'Brenna', lastName: 'Blackwell', isMember: true }
];

function filterCuerrentMember(arr){
var currentMemebers = arr.filter(function(element){

  return element.isMember === true;

});

return currentMemebers;
}

// for(var i = 0; i < arr.length; i++){
//   if(arr[i].isMember === 'true'){
//
//     result.push(arr[i]);
//   }
// }
// return result;
//
//   };



  console.log(filterCuerrentMember(users));
