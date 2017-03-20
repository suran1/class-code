var router = require('express').Router();
var users = require('./user');


router.get('/', function (req, res){

  res.status(200).json(user);
});



router.post('/', function(request, response){
var user = {

  id : users.length + 1,
  firstName: request.body.firstName,
  lastName: request.body.lastName,
  isMember: request.body.isMember
}

users.push(user);
response.status(200).json(user);
});







// function updateUser (arr){
//
//   var user ;
//   for(var i = 0; i<arr.lenghth; i++){
//
//     var newObject = {};
//
//     if(id.toString() === arr[i].id.toString()){
//       newObject.firstName = newUser.firstName;
//       newObject.lastName = newUser.lastName;
//       newObject.isMamber = newUser.isMamber;
//
//       user.push(newObject);
//     }
//   }
//   return user;
// }

//console.log(updateUser(users));


module.exports = router;
