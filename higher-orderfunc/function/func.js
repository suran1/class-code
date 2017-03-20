


var  pets = [


  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];




var updatePets = function (arr){

  var result = [];
  for (var i = 0; i<arr.length; i++){

    var newObject = {};
    newObject.name = arr[i].name;
    newObject.type = arr[i].type;

    if(newObject.type === 'dog'){
      newObject.isprecious = true
    }else {

      newObject.isprecious = false;

  }
  result.push(newObject);

}

return result;
};


console.log(updatePets(pets));
// part2 useful in higherorder function


var updatePetsWithFunc = function (arr, func){

  var result = [];
  for (var i = 0; i< arr.length; i++){

    result.push(func(arr[i]));


  }
  return result;

};

console.log(updatePetsWithFunc(pets, function(petObj){

  var newObject = {};
  newObject.name = petObj.name;
  newObject.type = petObj.type;

  if(newObject.type === 'dog'){
    newObject.isprecious = true
  }else {

    newObject.isprecious = false;

}

return newObject;
}));

console.log(pets.map(function(pets){

  if(pets.type === 'dog'){
    pets.isprecious = true;

  }else {
    pets.isprecious = false;

  }
  return pets;
}));



// syntax

// array.map(function (element, index, originalArray){
//   return
// })
