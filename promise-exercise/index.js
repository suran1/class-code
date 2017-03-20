var api = require ('./api');

function requestName () {
  return new Promise (function (resolve, reject){
    return api.getName(function (err, name){
      reject('Oops!');

    });
  });

}


requestName().then(function (name){

  console.log(name);
}).catch(function(err){
  console.log(err);

});
