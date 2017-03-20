var fs = require('fs');

function createFile (fileName, content){
  return new Promise (function(resolve, reject){
    fs.writeFile(fileName, content, function (err){

      if(err){
        reject(err);

      }
      resolve ();

    });
  });
}


function appendfile (fileName, content) {
  return new Promise (function (resolve, reject){
    fs.appendFile (fileName, content, function (err){

      if (err){
        reject(err);

      }
      resolve();

    });
  });
}


createFile('my-file.txt', 'dinosaurs!').then(function (){
  console.log('File created!');

});

appendFile ('my-file.txt', '\nAnd pancakes!').then(function (){
  console.log('File appended');

});
