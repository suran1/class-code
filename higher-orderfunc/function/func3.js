

// part-1

var pets = [
  { name: 'Sprinkles', type: 'dog' },
  { name: 'Reece', type: 'dog' },
  { name: 'Pukes-a-lot', type: 'cat' },
  { name: 'Not-a-real-pet', type: 'cat' },
  { name: 'Fluffykins', type: 'dog' },
  { name: 'Ugly', type: 'cat' }
];


var countDogs = function (arr){

var total = 0;
for (var i = 0; i <arr.length; i++){
if(arr[i].type === 'dog'){
  total +=1;

}
}
return total;

};

console.log(countDogs(pets));


// part-2


var countDogsWithFunk  = function (arr, func){

  var total =0;
  for (var i = 0; i <arr.length; i++){

     total = func(total, arr[i]);

   }
   return total;

}

 console.log(countDogsWithFunk(pets, function(total, petObj){
  if(petObj.type === 'dog'){
    return total +1;

  };
  return total;

}));


 var x = pets.reduce(function (total, pet){

  if(pet.type === 'dog'){

    return total + 1;

  }
  return total;

},0);

console.log(x);


var numbers = [1,2,3,4,5,6,7,8];

var n = numbers.reduce(function (total, currNbr){
  return total += currNbr;

},0);

console.log(n);



count =0;

numbers.forEach(function (element, index, originalArray){
  count += element;

});

console.log(count);
