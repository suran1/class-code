// EX- part1

//Create a function that takes the array of objects mentioned above and returns a new array containing only the dog objects.


var pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];

var filterDogs = function (arr){

  var result = [];

  for (var i = 0 ; i < arr.length; i++){

    if(arr[i].type === 'dog'){
  result.push(arr[i]);

      }
    }
    return result;
  };
console.log(filterDogs(pets));


var filterPets =  function (arr, func){

var result = [];

for (var i = 0; i<arr.length; i++){

  if(func(arr[i])){
    result.push(arr[i]);

  }
}
  return result;

};

console.log(filterPets(pets, function (pet){
  return pet.type === 'dog';
}));

var isDog = function(pets) {

  return pets.type === 'dog';
};

var isCat = function (pets) {

  return pets.type ===' cat';
};

console.log(filterPets(pets,isDog));
console.log(filterPets(pets,isCat));
