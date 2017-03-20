var fs = require('fs');
var path = require('path');

var fileIO = {
  createFile : createFile,
  readFile : readFile,
  appendToFile: appendToFile,
  deleteFile: deleteFile,
  createDir:createDir
};


function createFile (fileName, content){
  fs.writeFileSync(fileName, content);
  return fs.readFileSync(fileName, 'utf-8');

}

function readFile (fileName) {
  return fs.readFileSync(fileName, 'utf-8');
}

function appendToFile(fileName, content){
  fs.appendFileSync(fileName, 'utf-8');

}

function deleteFile (fileName) {
  fs.unlinkSync(path.resolve(fileName));
  return 'Successfully removed ' + fileName + '.';

}

function createDir (dirName){
  var absPath = path.resolve() + dirName;
  if(!fs.existsSync(absPath)){
    fs.mkdirSync(absPath);

  }
  return absPath;
}

 module.exports = fileIO;
