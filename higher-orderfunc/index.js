// Exercise-1


var pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

var filterDogs = function (arr) {
  var result = [];
  for(var i = 0; i< arr.length; i++){
    if(arr[i].type === 'dog'){
      result.push(arr[i]);

    }
  }
  return result;

};


filterDogs(pets);


var filterPets = function (arr, func) {
  var result = [];
  for (var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      result.push(arr[i]);

    }
  }
  return result;
}

filterPets(pets, function (element){
  return element.type === 'dog';

});
